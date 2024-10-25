import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Portfolio from './page';

jest.mock('swiper/react', () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}));

jest.mock('swiper/modules', () => ({
  Pagination: {},
  Keyboard: {},
}));

jest.mock('swiper/css', () => jest.fn());

describe('Portfolio component', () => {
  it('renders content', () => {
    render(<Portfolio />);
    const title = screen.getByText(/portfolio/i);
    const subTitle = screen.getByText(/my recent work/i);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
