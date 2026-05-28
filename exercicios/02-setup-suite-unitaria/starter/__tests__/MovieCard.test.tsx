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

// O objeto `movie` (acima) e o mock de navegação já estão prontos. Em cada teste:
// 1) render(<MovieCard movie={movie} />);  2) consulte com screen.getBy...;  3) expect(...).

describe('MovieCard', () => {
  // Depois do render: expect(screen.getByText('Matrix')).toBeTruthy();
  it.todo('renderiza o título do filme');

  // A nota aparece formatada como '⭐ 8.7' (vote_average.toFixed(1)).
  // expect(screen.getByText('⭐ 8.7')).toBeTruthy();
  it.todo('renderiza a nota (⭐ 8.7)');

  // Simule o toque: fireEvent.press(screen.getByText('Matrix'));
  // Verifique a navegação: expect(mockNavigate).toHaveBeenCalledWith('Detail', { id: 42, title: 'Matrix' });
  it.todo('navega pro detalhe ao tocar no card');
});
