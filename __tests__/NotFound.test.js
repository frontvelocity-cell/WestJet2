import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../src/components/NotFound';

test('renders 404 page', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const notFoundTitle = screen.getByText('404');
  expect(notFoundTitle).toBeInTheDocument();
  
  const pageNotFoundText = screen.getByText('Page Not Found');
  expect(pageNotFoundText).toBeInTheDocument();
});