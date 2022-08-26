import { render, screen } from '@testing-library/react';
import App from './App';

test('App container is rendered', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
