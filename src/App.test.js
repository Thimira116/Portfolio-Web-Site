import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

test('renders portfolio hero title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Building polished web experiences with React/i);
  expect(titleElement).toBeInTheDocument();
});

test('provides a downloadable CV link in the header', () => {
  render(<App />);
  const cvLink = screen.getByRole('link', { name: 'CV' });

  expect(cvLink.getAttribute('href')).toMatch(/\/CV\.pdf$/);
  expect(cvLink).toHaveAttribute('download', 'Thimira Savinda CV.pdf');
});
