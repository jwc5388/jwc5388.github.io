import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the portfolio header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: "Jae Woo Chang's Portfolio" })).toBeInTheDocument();
});

test('switches the header to Korean', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'KOR' }));
  expect(screen.getByRole('heading', { name: '장재우 포트폴리오' })).toBeInTheDocument();
});
