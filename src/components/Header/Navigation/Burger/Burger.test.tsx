import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Burger from './Burger';

describe('Burger component', () => {
  it('calls handleShowMenu function on click', () => {
    const handleShowMenu = jest.fn();
    render(<Burger showMenu={false} handleShowMenu={handleShowMenu} />);
    const burger = screen.getByTestId('burger');
    fireEvent.click(burger);
    expect(handleShowMenu).toHaveBeenCalledTimes(1);
  });
});
