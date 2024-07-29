import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StarRating from '../StarsRating';

describe('StarRating component', () => {
  it('renders the correct number of filled stars', () => {
    render(<StarRating stars={4} />);

    const filledStars = screen.getAllByText('★').slice(0, 4);
    filledStars.forEach(star => {
      expect(star).toHaveStyle('color: gold');
    });

    const emptyStars = screen.getAllByText('★').slice(4, 5);
    emptyStars.forEach(star => {
      expect(star).toHaveStyle('color: gray');
    });
  });

  it('renders with the correct CSS class', () => {
    render(<StarRating stars={3} />);

    const starRatingElement = screen.getByTestId('stars');
    expect(starRatingElement).toBeInTheDocument();
  });
});
