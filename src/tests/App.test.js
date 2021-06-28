import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders frase', () => {
  render(<App />);
  const frase = screen.getByText(/El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial/i);
  expect(frase).toBeInTheDocument();
});
