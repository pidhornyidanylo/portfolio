import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeContextProvider } from './ThemeContext';
import ThemeContext from './ThemeContext';
import React, { useContext } from 'react';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  return (
    <div>
      <p data-testid='theme-status'>{isDarkTheme ? 'Dark' : 'Light'}</p>
      <button onClick={toggleThemeHandler} data-testid='toggle-button'>
        Toggle Theme
      </button>
    </div>
  );
};

beforeEach(() => {
  localStorage.clear();
  jest.spyOn(Storage.prototype, 'getItem');
  jest.spyOn(Storage.prototype, 'setItem');
});

describe('ThemeContextProvider', () => {
  it('initial theme is set based on localStorage', () => {
    localStorage.setItem('isDarkTheme', 'true');
    render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );
    expect(screen.getByTestId('theme-status')).toHaveTextContent('Dark');
    expect(document.querySelector('html')).toHaveClass('dark');
  });

  it('toggleThemeHandler switches the theme and updates localStorage', () => {
    render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );
    expect(screen.getByTestId('theme-status')).toHaveTextContent('Light');
    expect(localStorage.getItem('isDarkTheme')).toBe('false');
    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme-status')).toHaveTextContent('Dark');
    expect(localStorage.getItem('isDarkTheme')).toBe('true');
    setTimeout(() => {
      expect(document.querySelector('html')).toHaveClass('dark');
    }, 0);
  });

  it('removes "dark" class when toggled back to light theme', () => {
    render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );
    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme-status')).toHaveTextContent('Light');
    expect(document.querySelector('html')).not.toHaveClass('dark');
    expect(localStorage.getItem('isDarkTheme')).toBe('false');
  });
});
