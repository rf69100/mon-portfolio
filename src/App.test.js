import { act, render, screen } from '@testing-library/react';
import App from './App';

test('affiche le loader au démarrage', async () => {
  await act(async () => {
    render(<App />);
  });
  const loader = screen.getByText(/chargement du portfolio/i);
  expect(loader).toBeInTheDocument();
});
