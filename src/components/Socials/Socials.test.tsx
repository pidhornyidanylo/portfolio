import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Socials from './Socials';

describe('Socials component', () => {
  it('renders all items properly', () => {
    render(<Socials />);
    const gitHubItem = screen.getByRole('img', {
      name: /github/i,
    });
    const linkedInItem = screen.getByRole('img', {
      name: /linkedin/i,
    });
    const telegramItem = screen.getByRole('img', {
      name: /telegram/i,
    });
    const whatsAppItem = screen.getByRole('img', {
      name: /whatsapp/i,
    });
    const telephoneItem = screen.getByRole('img', {
      name: /telephone/i,
    });
    const emailItem = screen.getByRole('img', {
      name: /email/i,
    });
    expect(gitHubItem).toBeInTheDocument();
    expect(linkedInItem).toBeInTheDocument();
    expect(telegramItem).toBeInTheDocument();
    expect(whatsAppItem).toBeInTheDocument();
    expect(telephoneItem).toBeInTheDocument();
    expect(emailItem).toBeInTheDocument();
  });
});
