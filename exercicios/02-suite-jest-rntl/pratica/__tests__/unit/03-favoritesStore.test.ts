// __tests__/unit/03-favoritesStore.test.ts
//
// ✅ AVALIATIVO — o aluno entrega isto (conta nota). Faça TODOS os it() — todos contam.
//    Marca por it(): 🧑‍🏫 = a gente faz junto em aula · 🧑‍💻 = o aluno faz sozinho.
//
// Escreva os testes da favoritesStore.
//
// Store Zustand é singleton: precisa resetar o estado entre testes
// (senão um teste contamina o outro). Use o beforeEach abaixo.
//
// Acesse estado e actions com useFavoritesStore.getState():
//   useFavoritesStore.getState().add(1)
//   useFavoritesStore.getState().ids            // → [1]
//   useFavoritesStore.getState().isFavorite(1)  // → true

import { useFavoritesStore } from '@/store/favoritesStore';

beforeEach(() => {
  useFavoritesStore.setState({ ids: [] });
});

// Atalho pra ler estado e actions fora de componente React:
const s = () => useFavoritesStore.getState();

// FÁCEIS (1-4): Arrange e Act já escritos — complete SÓ o expect (começam vermelhos → verde).
// 🔴 DESAFIOS (5-6): ainda it.todo — escreva o teste inteiro a partir da dica.

describe('favoritesStore', () => {
  it('1. add(id) adiciona o id à lista', () => {   // 🧑‍🏫 em aula
    // Act
    s().add(1);
    // Assert — complete:
    expect(s().ids).toEqual(/* TODO: qual array? */);
  });

  it('2. remove(id) tira o id da lista', () => {   // 🧑‍🏫 em aula
    // Arrange
    s().add(1);
    // Act
    s().remove(1);
    // Assert — complete:
    expect(s().ids).toEqual(/* TODO */);
  });

  it('3. isFavorite(id) reflete o estado atual', () => {   // 🧑‍💻 aluno
    // Arrange
    s().add(1);
    // Assert — complete (true ou false?):
    expect(s().isFavorite(1)).toBe(/* TODO */);
    expect(s().isFavorite(99)).toBe(/* TODO */);
  });

  it('4. clear() esvazia a lista', () => {   // 🧑‍💻 aluno
    // Arrange
    s().add(1);
    s().add(2);
    // Act
    s().clear();
    // Assert — complete:
    expect(s().ids).toEqual(/* TODO */);
  });

  // 🔴 DESAFIO: chamar add(1) DUAS vezes não pode duplicar (ids continua [1]).
  //    Escreva Act + Assert do zero.
  it.todo('5. add(id) não duplica id já existente');   // 🧑‍💻 aluno

  // 🔴 DESAFIO: toggle(1) na lista vazia ADICIONA; chamar toggle(1) de novo REMOVE.
  //    Faça as 2 verificações (após o 1º toggle = [1]; após o 2º = []).
  it.todo('6. toggle(id) adiciona se ausente e remove se presente');   // 🧑‍💻 aluno
});
