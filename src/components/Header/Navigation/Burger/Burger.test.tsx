import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Burger from './Burger';

describe('Burger component', () => {
  it('calls handleShowMenu function on click', () => {
    const toggleShowMenu = jest.fn();
    render(<Burger showMenu={false} toggleShowMenu={toggleShowMenu} />);
    const burger = screen.getByTestId('burger');
    fireEvent.click(burger);
    expect(toggleShowMenu).toHaveBeenCalledTimes(1);
  });
});
