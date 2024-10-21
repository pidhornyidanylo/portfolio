import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavLink from './NavLink';

describe('NavLink component', () => {
  it('renders properly', () => {
    render(<NavLink href={'/services'} route={'services'} />);
    const servicesLink = screen.getByRole('link', {
      name: /services/i,
    });
    expect(servicesLink).toBeInTheDocument();
  });
});
