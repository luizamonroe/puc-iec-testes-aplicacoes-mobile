// __tests__/counterStore.test.ts
//
// HANDS-ON — escreva os testes da counterStore.
//
// Mesmo padrão da favoritesStore: resete o estado entre testes.
//   useCounterStore.getState().increment()
//   useCounterStore.getState().count   // → lê o valor atual

import { useCounterStore } from '../src/store/counterStore';

beforeEach(() => {
  useCounterStore.setState({ count: 0 });
});

// Dica: const s = () => useCounterStore.getState();  (count começa em 0 por causa do beforeEach)

describe('counterStore', () => {
  // Act: s().increment()  ·  Assert: expect(s().count).toBe(1)
  it.todo('increment soma 1 ao count');

  // Act: s().decrement()  ·  Assert: expect(s().count).toBe(-1)
  it.todo('decrement subtrai 1 do count');

  // Arrange: s().increment(); s().increment()  ·  Act: s().reset()  ·  Assert: expect(s().count).toBe(0)
  it.todo('reset volta o count pra 0');
});
