import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import EducationItem from './EducationItem';

describe('EducationItem component', () => {
  it('renders properly', () => {
    render(
      <EducationItem
        item={{
          field: 'Mocking',
          degree: 'MockMaster',
          institution: 'MockTUNG',
          years: '2022-2024',
        }}
      />
    );
    const fieldField = screen.getByText(/mocking/i);
    const degreeField = screen.getByText(/mockMaster/i);
    const institutionField = screen.getByText(/mockTUNG/i);
    const yearsField = screen.getByText(/2022\-2024/i);
    const dateIcon = screen.getByRole('img', {
      name: /date/i,
    });
    expect(fieldField).toBeInTheDocument();
    expect(degreeField).toBeInTheDocument();
    expect(institutionField).toBeInTheDocument();
    expect(yearsField).toBeInTheDocument();
    expect(dateIcon).toBeInTheDocument();
  });
});
