import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Skills from './page';

describe('Skills component', () => {
  it('renders page title & subtitle', () => {
    render(<Skills />);
    const title = screen.getByRole('heading', {
      name: /skills/i,
    });
    const subTitle = screen.getByText(/my technical level/i);
    const sectionTitle = screen.getByRole('heading', {
      name: /frontend developer/i,
    });
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(sectionTitle).toBeInTheDocument();
  });
});
