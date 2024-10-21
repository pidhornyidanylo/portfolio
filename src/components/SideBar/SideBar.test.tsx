import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar component', () => {
  it('renders content properly', () => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
    render(<SideBar />);
    const sidebarComponent = screen.getByTestId('sidebar');
    const developersAvatar = screen.getByRole('img', {
      name: /danylo\-avatar/i,
    });
    const developersName = screen.getByRole('heading', {
      name: /danylo pidhornyi/i,
    });
    const developersSpeciality = screen.getByRole('heading', {
      name: /frontend developer/i,
    });
    const aboutDeveloper = screen.getByText(
      /web developer skilled in javascript, typescript, modern frameworks, performance optimization, and collaborative problem\-solving\./i
    );
    expect(sidebarComponent).toBeInTheDocument();
    expect(developersAvatar).toBeInTheDocument();
    expect(developersName).toBeInTheDocument();
    expect(developersSpeciality).toBeInTheDocument();
    expect(aboutDeveloper).toBeInTheDocument();
  });
});
