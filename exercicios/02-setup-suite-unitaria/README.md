# Atividade 2 — Suíte Unitária sobre App RN (10 pts)

> **TAM** | **Aula:** 2 (28/05/2026) | **Entrega:** 11/06/2026

## Objetivo

Escrever uma **suíte de testes unitários (Jest + RNTL)** sobre um app React Native que já vem implementado — o mesmo app TMDB da disciplina de Arquitetura. Foco do QA: testar código existente, **não** implementar feature.

## Por onde começar

1. **Enunciado completo:** [`enunciado.md`](./enunciado.md)
2. **Guia passo a passo:** [`guia-passo-a-passo.md`](./guia-passo-a-passo.md)
3. **App + scaffolds:** [`starter/`](./starter/) — leia o `README.md` do starter
4. **Modelo de README de entrega:** [`template-relatorio.md`](./template-relatorio.md)

```bash
cd starter
npm install
npm test     # posterUrl já passa verde (3 testes); o resto é seu
```

## Onde escrever cada teste (links diretos)

Cada link abre o arquivo **na linha exata** — o comentário-guia (Arrange/Act/Assert) fica logo acima do `it.todo`. Troque `it.todo('...')` por `it('...', () => { ... })`.

> 📌 **Modelo resolvido:** [`posterUrl.test.ts`](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/posterUrl.test.ts#L8) — leia antes de começar.

### 1. `favoritesStore.test.ts` — store Zustand (6 testes)

| Teste | Abrir no ponto |
|---|---|
| `add(id)` adiciona o id | [linha 25](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L25) |
| `add(id)` não duplica | [linha 28](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L28) |
| `remove(id)` tira o id | [linha 31](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L31) |
| `toggle(id)` adiciona/remove | [linha 35](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L35) |
| `isFavorite(id)` reflete estado | [linha 38](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L38) |
| `clear()` esvazia | [linha 41](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/favoritesStore.test.ts#L41) |

### 2. `MovieCard.test.tsx` — teste de tela (RNTL) ⭐

| Teste | Abrir no ponto |
|---|---|
| renderiza o título | [linha 35](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/MovieCard.test.tsx#L35) |
| renderiza a nota (`⭐ 8.7`) | [linha 39](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/MovieCard.test.tsx#L39) |
| toque no card navega | [linha 43](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/MovieCard.test.tsx#L43) |

### 3. `api.test.ts` — `isTokenError` (5 testes)

| Teste | Abrir no ponto |
|---|---|
| `true` pra `status 401` | [linha 20](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/api.test.ts#L20) |
| `true` pra flag `isTokenError` | [linha 23](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/api.test.ts#L23) |
| `true` pra `TMDB_TOKEN_MISSING` | [linha 26](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/api.test.ts#L26) |
| `false` pra `null` | [linha 29](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/api.test.ts#L29) |
| `false` pra erro genérico (500) | [linha 32](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/api.test.ts#L32) |

### 4. `counterStore.test.ts` — store Zustand (3 testes)

| Teste | Abrir no ponto |
|---|---|
| `increment` soma 1 | [linha 19](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/counterStore.test.ts#L19) |
| `decrement` subtrai 1 | [linha 22](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/counterStore.test.ts#L22) |
| `reset` volta pra 0 | [linha 25](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/counterStore.test.ts#L25) |

### 🎁 Bônus — `popularMovies.test.ts` (mock de dependência)

| Teste | Abrir no ponto |
|---|---|
| chama `/movie/popular` com a page | [linha 22](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/popularMovies.test.ts#L22) |
| devolve o `data` da resposta | [linha 23](https://github.com/jacksonsmith/puc-iec-testes-aplicacoes-mobile/blob/main/exercicios/02-setup-suite-unitaria/starter/__tests__/popularMovies.test.ts#L23) |

## O que entregar

| # | Critério | Peso |
|---|----------|------|
| 1 | `npm install && npm test` roda em < 15min (eliminatório) | 2 |
| 2 | Testes `favoritesStore` (6 verdes) | 2 |
| 3 | Teste de tela `MovieCard` (RNTL) — render + press navega | 2 |
| 4 | Testes `isTokenError` (5 verdes) | 2 |
| 5 | Testes `counterStore` (3 verdes) | 1 |
| 6 | Cobertura ≥ 70% em `src/store` e `src/utils` | 1 |

**Total: 10 pts.** Bônus (arredondamento): mock de query (`jest.mock`), CI verde no fork, testes parametrizados (`it.each`).

> Você trabalha em `starter/__tests__/`. **Não comite `node_modules/` nem `coverage/`** — o `.gitignore` já cuida.
