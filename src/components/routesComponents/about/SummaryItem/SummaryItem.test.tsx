import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SummaryItem from './SummaryItem';

describe('SummaryItem component', () => {
  it('renders properly', () => {
    render(
      <SummaryItem
        title={'Mocked Projects'}
        icon={'/assets/icons/about/projects.svg'}
        count={8}
      />
    );
    const sammaryItemTitle = screen.getByText(/mocked projects/i);
    const sammaryItemIcon = screen.getByRole('img', {
      name: /mocked projects/i,
    });
    const sammaryItemProjectsCount = screen.getByText(/8/i);
    expect(sammaryItemTitle).toBeInTheDocument();
    expect(sammaryItemIcon).toBeInTheDocument();
    expect(sammaryItemProjectsCount).toBeInTheDocument();
  });
});
