import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Services from './page';

describe('Services component', () => {
  it('renders content', () => {
    render(<Services />);
    const title = screen.getByRole('heading', {
      name: /services/i,
    });
    const subTitle = screen.getByText(/what i offer/i);
    const sectionTitle = screen.getByText(
      /As a frontend developer, I offer responsive design, user-friendly interfaces, performance optimization, modern frameworks, and seamless user experiences across platforms. I ensure high-quality, maintainable code, covered with tests to guarantee reliability and scalability./i
    );
    const imageOne = screen.getByRole('img', {
      name: /services\-image\-1/i,
    });
    const imageTwo = screen.getByRole('img', {
      name: /services\-image\-2/i,
    });
    const imageThree = screen.getByRole('img', {
      name: /services\-image\-3/i,
    });
    const imageFour = screen.getByRole('img', {
      name: /services\-image\-4/i,
    });
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(sectionTitle).toBeInTheDocument();
    expect(imageOne).toBeInTheDocument();
    expect(imageTwo).toBeInTheDocument();
    expect(imageThree).toBeInTheDocument();
    expect(imageFour).toBeInTheDocument();
  });
});
