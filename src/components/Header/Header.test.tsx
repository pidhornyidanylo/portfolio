import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header Server Component', () => {
  it('renders logo with proper content', () => {
    render(<Header />);
    const logo = screen.getByRole('heading', {
      name: /danylo pidhornyi/i,
    });
    expect(logo).toBeInTheDocument();
  });
  it('renders navigation', () => {
    render(<Header />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
  it('renders SwitchTheme component', () => {
    render(<Header />);
    const switchTheme = screen.getByRole('switch');
    expect(switchTheme).toBeInTheDocument();
  });
});
