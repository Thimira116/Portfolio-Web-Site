import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Building polished web experiences with React/i);
  expect(titleElement).toBeInTheDocument();
});
