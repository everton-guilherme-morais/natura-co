import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoItemCart from '@/components/NoItemCart';

describe('NoItemCart component', () => {
  it('should render the no items message and image', () => {
    render(<NoItemCart />);

    const image = screen.getByAltText('') as HTMLImageElement;
    expect(image).toBeInTheDocument();

    const imageBannerHome = screen.getByTestId('sacola-natura');
    expect(imageBannerHome).toBeInTheDocument();

    const text = screen.getByText((content, element) => 
      element?.tagName.toLowerCase() === 'p' && 
      content.includes('Ei ei, sua sacola está vazia, você não viu que o') &&
      content.includes('está no precinho? Corre lá!')
    );
    expect(text).toBeInTheDocument();

    const link = screen.getByText('Natura Homem Emocion.e');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/detailsProduct/12');
  });
});
