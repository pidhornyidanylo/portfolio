import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationList from './NavigationList';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    to: jest.fn(),
    timeline: jest.fn(),
  };
});

describe('NavigationList component', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
  });

  it('renders the regular navigation list on wide screens', () => {
    render(<NavigationList />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('hides Burger component on wide screens', () => {
    window.innerWidth = 769;
    window.dispatchEvent(new Event('resize'));
    render(<NavigationList />);
    const burger = screen.queryByTestId('burger');
    expect(burger).not.toBeInTheDocument();
  });

  it('shows Burger component on small screens', () => {
    window.innerWidth = 768;
    window.dispatchEvent(new Event('resize'));
    render(<NavigationList />);
    const burger = screen.getByTestId('burger');
    expect(burger).toBeInTheDocument();
  });
});
