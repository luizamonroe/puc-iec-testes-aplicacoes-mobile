// __tests__/api.test.ts
//
// HANDS-ON (camada data) — testar a lógica pura do módulo de API.
//
// isTokenError(error) classifica se um erro é de autenticação:
//   - true  se error.isTokenError === true
//   - true  se error.response.status === 401
//   - true  se error.message começa com 'TMDB_TOKEN_MISSING'
//   - false pra null/undefined/erro genérico
//
// Não precisa de rede nem mock de axios — é função pura sobre o objeto de erro.

import { isTokenError } from '../src/services/api';

// Função pura: monte o objeto de erro de entrada e verifique o booleano de saída.
// Troque o it.todo('...') por it('...', () => { expect(isTokenError(ENTRADA)).toBe(ESPERADO); }).

describe('isTokenError', () => {
  // Entrada: { response: { status: 401 } }  ·  Esperado: true
  it.todo('retorna true pra erro com response.status 401');

  // Entrada: { isTokenError: true }  ·  Esperado: true
  it.todo('retorna true pra erro com flag isTokenError');

  // Entrada: new Error('TMDB_TOKEN_MISSING: ...')  ·  Esperado: true
  it.todo('retorna true pra erro TMDB_TOKEN_MISSING');

  // Entrada: null  ·  Esperado: false
  it.todo('retorna false pra null');

  // Entrada: { response: { status: 500 } }  ·  Esperado: false
  it.todo('retorna false pra erro genérico (status 500)');
});
