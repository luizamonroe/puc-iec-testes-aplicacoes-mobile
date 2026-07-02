# Lab ao vivo — Performance + Security no CineFav (não avaliativo)

> Demo em aula (02/07). Usa o **mesmo app CineFav** já instalado pro Maestro — sem setup extra.
> Não pontua (perf/security saiu do escopo avaliativo); é panorama executável, não slide teórico.

## Duas trilhas — roda em paralelo com o plantão de setup

Enquanto o prof ajuda quem ainda está ajustando o Android Studio/emulador, quem **já** tem
device/emulador funcionando faz este lab **sozinho e self-guided** (é copiar-colar + ler o
resultado — o prof circula quando sobra tempo do plantão). Quem **ainda não** tem device
funcionando faz a **Trilha B**.

- **Trilha A — com device/emulador rodando:** seções 1–3 completas (mede cold start/jank, acha
  + corrige + rebuilda + reinstala + reverifica o achado de segurança).
- **Trilha B — sem device ainda:** achar + editar o manifest (sem `adb`, é ler/editar arquivo) +
  **provar o achado no binário já instalado** (`aapt dump`, sem precisar buildar nada — ver seção
  2). Rebuild completo fica pra quando tiver device — builda sem poder verificar não vale a pena.

Ao reconvergir (depois do plantão), **5min de compartilhar achados** em vez de demo do zero —
a maioria já fez sozinho.

## 1. Performance — cold start e jank (Trilha A)

> **Por que importa:** esses milissegundos decidem se o usuário espera ou fecha o app antes de
> ver a primeira tela. Ref. oficial: [Android Developers — app startup best practices](https://developer.android.com/topic/performance/appstartup/best-practices).

```bash
adb shell am force-stop com.puciec.cinefav
adb shell am start -W com.puciec.cinefav/.MainActivity
```

Olhar a linha **`TotalTime`** (ms). Rodar 3x, comparar variação. Depois rodar **sem** o
`force-stop` antes (warm start) e comparar — mesma app, número bem menor.

```bash
adb shell dumpsys gfxinfo com.puciec.cinefav
```

Rolar a lista de filmes no device **antes** de rodar o comando (ele mede o histórico recente).
Olhar `Janky frames` (% de frames que estouraram 16ms/60fps). Comparar com colega — variação
normal entre emulador/device físico.

**Por que não tem "fix" nessa seção:** olhamos o código do CineFav — é app limpo, sem gargalo
plantado. Nem todo achado de QA tem correção de 1 linha; às vezes o valor é registrar o **baseline**
(esses números de hoje) pra virar alarme se um PR futuro piorar. É um músculo de QA diferente do
da seção 2 (achar-e-corrigir na hora): aqui é achar-e-vigiar.

## 2. Security — achado real no manifest (Trilha A e B)

> **Por que importa:** com o device na mão (sem senha, sem root), dá pra extrair os dados do app
> via `adb backup` — não é hipotético: um SDK terceiro real (EngageLab) expôs "millions of Android
> wallets" por misconfig parecido ([Microsoft Security Blog, abr/2026](https://www.microsoft.com/en-us/security/blog/2026/04/09/intent-redirection-vulnerability-third-party-sdk-android/)).

```bash
cd exercicios/03-maestro-e2e/pratica
cat android/app/src/main/AndroidManifest.xml | grep -E "allowBackup|EXTERNAL_STORAGE|SYSTEM_ALERT"
```

Dois achados **reais** (não plantados — são o app de verdade):

1. **`android:allowBackup="true"`** — permite extrair dados do app via `adb backup` sem root
   (OWASP Mobile M9/M2 — Insecure Data Storage). Ligado ao MASVS-STORAGE.
   > **M9 e M2 não são achados diferentes** — M9 é a numeração do Mobile Top 10 2024 (atual);
   > M2 é a numeração da lista antiga (2016). Mesma categoria (Insecure Data Storage), 2 rótulos
   > por causa da atualização do OWASP. Ref.: [OWASP MASTG](https://mas.owasp.org/MASTG/).
2. **`READ/WRITE_EXTERNAL_STORAGE` + `SYSTEM_ALERT_WINDOW`** — permissões que o app não usa
   (não salva/lê arquivo nenhum, não desenha overlay). Viola least privilege — superfície de
   ataque desnecessária.

**Fix:** editar `android/app/src/main/AndroidManifest.xml`:
```diff
- android:allowBackup="true"
+ android:allowBackup="false"
```
Remover as 3 permissões não usadas do topo do arquivo.

### Trilha B — provar o achado sem buildar nada

Vocês já têm o `CineFav.apk` baixado (usaram pra instalar via `adb install`, no COMECE-AQUI —
ajuste o caminho abaixo pra onde salvaram o arquivo, ex. `~/Downloads/CineFav.apk`). Dá pra
provar o achado **no binário de verdade, real, distribuído** — sem SDK de projeto, sem
`npm install`, sem device:
```bash
aapt dump xmltree CineFav.apk AndroidManifest.xml | grep -i backup
```
`aapt` vem com o Android SDK build-tools (mesmo pacote do emulador, já instalado). Isso mostra que
o achado não é só teoria de código-fonte — está no binário que qualquer pessoa baixaria. Fixar e
reverificar em build novo fica pra quando tiver device (Trilha A) — builda sem poder instalar não
prova nada.

### Trilha A — rebuild, reinstalar, reverificar

> **Antes de buildar:** se vocês instalaram o CineFav via APK pronto (fluxo padrão do
> COMECE-AQUI), **nunca rodaram `npm install` nessa pasta** — o rebuild vai falhar sem isso
> (`Included build '.../android/null' does not exist`). Rodem primeiro:
> ```bash
> npm install
> ```
> **Isso é pesado — reservem tempo e espaço em disco.** Testamos: ~5min no primeiro build, e o
> Gradle cria vários GB de artefato (múltiplas arquiteturas nativas). Se o disco estiver quase
> cheio, o build falha com "No space left on device" no meio — confiram espaço livre antes.

```bash
cd android && ./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
cat app/src/main/AndroidManifest.xml | grep allowBackup   # confirma na fonte
aapt dump xmltree app/build/outputs/apk/debug/app-debug.apk AndroidManifest.xml | grep -i backup
```
O `aapt dump` no APK **recém-buildado** prova que o fix foi pro binário, não só a fonte — mesmo
comando da Trilha B, mas comparando antes (CineFav.apk original) vs depois (app-debug.apk com fix).

## Por que isso substitui a "Aula 5" original

O deck antigo (`slides-source/archive/aula-05-performance-security-observability.md`) era
panorama genérico (Applitools, Datadog RUM, SSL pinning bypass, Frida) sem conexão com o app
da disciplina. Este lab é **menor, mas real**: mede e corrige o app que a turma já tem rodando.
