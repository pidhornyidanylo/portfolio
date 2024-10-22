import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import QualificationTabs from './QualificationTabs';

describe('QualificationTabs component', () => {
  it('renders tablist item names', () => {
    render(<QualificationTabs />);
    const certificationTab = screen.getByRole('tab', {
      name: /certification icon certification/i,
    });
    const educationTab = screen.getByRole('tab', {
      name: /education icon education/i,
    });
    expect(certificationTab).toBeInTheDocument();
    expect(educationTab).toBeInTheDocument();
  });
});
