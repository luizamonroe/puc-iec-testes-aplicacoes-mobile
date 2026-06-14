// __tests__/unit/01-posterUrl.test.ts
//
// 📘 MODELO RESOLVIDO — já vem pronto, é o molde (NÃO é entrega).
//    Leia antes de começar e use de exemplo pros próximos.
// Função pura: entrada → saída, sem estado, sem rede. O teste mais barato e estável.

import { posterUrl } from '@/utils/poster-url';

describe('posterUrl', () => {
  it('1. monta URL completa com size default w342', () => {
    expect(posterUrl('/abc.jpg')).toBe('https://image.tmdb.org/t/p/w342/abc.jpg');
  });

  it('2. respeita o size informado', () => {
    expect(posterUrl('/abc.jpg', 'w500')).toBe('https://image.tmdb.org/t/p/w500/abc.jpg');
  });

  it('3. retorna null quando path é null', () => {
    expect(posterUrl(null)).toBeNull();
  });
});
