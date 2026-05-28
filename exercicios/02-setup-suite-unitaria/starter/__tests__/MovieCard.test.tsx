// __tests__/MovieCard.test.tsx
//
// TESTE DE TELA (React Native Testing Library) — o coração do QA mobile.
// Testa o que o USUÁRIO vê e faz, não a implementação.
//
// MovieCard usa useNavigation() — mocke o hook (não há NavigationContainer no teste):
//
//   const mockNavigate = jest.fn();
//   jest.mock('@react-navigation/native', () => ({
//     useNavigation: () => ({ navigate: mockNavigate }),
//   }));
//
// Queries RNTL: screen.getByText(...) · fireEvent.press(...) · expect(...).toBeTruthy()

import { render, screen, fireEvent } from '@testing-library/react-native';
import MovieCard from '../src/components/MovieCard';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

const movie = {
  id: 42, title: 'Matrix', overview: '',
  poster_path: '/m.jpg', release_date: '1999', vote_average: 8.7,
};

beforeEach(() => mockNavigate.mockClear());

describe('MovieCard', () => {
  it.todo('renderiza o título do filme');
  it.todo('renderiza a nota (⭐ 8.7)');
  it.todo('navega pro detalhe ao tocar no card');
});
