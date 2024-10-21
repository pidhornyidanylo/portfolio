import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import CopyTooltip from './CopyTooltip';

const pause = async (duration = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

describe('CopyTooltip component', () => {
  it('renders properly', () => {
    render(
      <CopyTooltip
        copyText={'Hello World!'}
        imgSrc={'/mock/path'}
        alt={'mock_alt'}
      />
    );
    const mockItem = screen.getByRole('img', {
      name: /mock_alt/i,
    });
    expect(mockItem).toBeInTheDocument();
  });

  it('should copy text to clipboard when button is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
        readText: jest.fn().mockResolvedValue('Hello World!'),
      },
    });

    render(
      <CopyTooltip
        copyText={'Hello World!'}
        imgSrc={'/mock/path'}
        alt={'mock_alt'}
      />
    );

    const button = screen.getByTestId('copy-btn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await pause();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello World!');
  });
});
