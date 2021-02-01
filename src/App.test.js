import { render, screen } from '@testing-library/react';
import App from './App';
import Results from './components/Results';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render a pre!', ()=> {
  const results = [{name: 'Luke', url:'http://luke.com'}];
  render(<Results data={results} />);
  const items = screen.getAllByRole('pre');
  expect(items).toHaveLength(1);
});

