import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SwitchTheme from './SwitchTheme';
import ThemeContext from '@/store/ThemeContext';

const mockContextValue = {
  isDarkTheme: false,
  toggleThemeHandler: jest.fn(),
};

describe('SwitchTheme component', () => {
  it('renders the switch component', () => {
    render(
      <ThemeContext.Provider value={mockContextValue}>
        <SwitchTheme />
      </ThemeContext.Provider>
    );
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });
  it('calls toggleThemeHandler on click', () => {
    render(
      <ThemeContext.Provider value={mockContextValue}>
        <SwitchTheme />
      </ThemeContext.Provider>
    );
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    expect(mockContextValue.toggleThemeHandler).toHaveBeenCalled();
  });
});
