import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FAQ from '../src/components/FAQ';

test('renders FAQ component', () => {
  render(
    <BrowserRouter>
      <FAQ />
    </BrowserRouter>
  );
  const faqTitle = screen.getByText(/Questions we often get from our customers/i);
  expect(faqTitle).toBeInTheDocument();
});

test('expands FAQ item on click', () => {
  render(
    <BrowserRouter>
      <FAQ />
    </BrowserRouter>
  );
  const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/i);
  fireEvent.click(firstQuestion);
  const answer = screen.getByText(/Yes, booking with Al Majlis guarantees/i);
  expect(answer).toBeInTheDocument();
});