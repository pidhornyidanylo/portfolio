import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import CertificationItem from './CertificationItem';

describe('CertificationItem component', () => {
  it('renders properly', () => {
    render(
      <CertificationItem
        item={{
          title: 'Mock.js',
          institution: 'Mockdemy',
          years: '2023-2024',
        }}
      />
    );
    const titleField = screen.getByText(/mock.js/i);
    const institutionField = screen.getByText(/mockdemy/i);
    const yearsField = screen.getByText(/2023\-2024/i);
    const dateIcon = screen.getByRole('img', {
      name: /date/i,
    });
    expect(titleField).toBeInTheDocument();
    expect(institutionField).toBeInTheDocument();
    expect(yearsField).toBeInTheDocument();
    expect(dateIcon).toBeInTheDocument();
  });
});
