import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from '../sections/Banner';

describe('Banner component', () => {
  it('verify if banner rendered ok', () => {
    render(<Banner />);

    const imageBannerHome = screen.getByTestId('banner-home-nature-emocione');
    expect(imageBannerHome).toBeInTheDocument();
  });
});
