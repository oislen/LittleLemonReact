import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/30% Off This Weekend/i);
  expect(linkElement).toBeInTheDocument();
});
