// __tests__/favoritesStore.test.ts
//
// HANDS-ON / ATIVIDADE 2 — escreva os testes da favoritesStore.
//
// Store Zustand é singleton: precisa resetar o estado entre testes
// (senão um teste contamina o outro). Use o beforeEach abaixo.
//
// Acesse estado e actions com useFavoritesStore.getState():
//   useFavoritesStore.getState().add(1)
//   useFavoritesStore.getState().ids        // → [1]
//   useFavoritesStore.getState().isFavorite(1)  // → true

import { useFavoritesStore } from '../src/store/favoritesStore';

beforeEach(() => {
  useFavoritesStore.setState({ ids: [] });
});

// Dica pra todos: crie um atalho no topo do describe →  const s = () => useFavoritesStore.getState();
// Padrão de cada teste = Arrange (prepara) · Act (executa a action) · Assert (expect).
// Troque o it.todo('...') por it('...', () => { ...seu código... }).

describe('favoritesStore', () => {
  // Act: s().add(1)  ·  Assert: expect(s().ids).toEqual([1])
  it.todo('add(id) adiciona o id à lista');

  // Act: s().add(1); s().add(1)  ·  Assert: expect(s().ids).toEqual([1])  (continua só um)
  it.todo('add(id) não duplica id já existente');

  // Arrange: s().add(1)  ·  Act: s().remove(1)  ·  Assert: expect(s().ids).toEqual([])
  it.todo('remove(id) tira o id da lista');

  // toggle(1) na lista vazia ADICIONA; chamar toggle(1) de novo REMOVE.
  // São 2 verificações: expect após o 1º toggle = [1]; após o 2º = [].
  it.todo('toggle(id) adiciona se ausente e remove se presente');

  // Arrange: s().add(1)  ·  Assert: expect(s().isFavorite(1)).toBe(true) e isFavorite(99) toBe(false)
  it.todo('isFavorite(id) reflete o estado atual');

  // Arrange: add(1); add(2)  ·  Act: s().clear()  ·  Assert: expect(s().ids).toEqual([])
  it.todo('clear() esvazia a lista');
});
