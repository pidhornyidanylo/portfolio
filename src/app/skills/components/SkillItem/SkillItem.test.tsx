import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SkillItem from './SkillItem';

describe('SkillItem component', () => {
  it('renders properly', () => {
    render(
      <SkillItem
        skillItem={{
          title: 'HTML5',
          progress: 85,
          iconUrl: '/assets/icons/skills/html.svg',
        }}
      />
    );
    const htmlSkill = screen.getByText(/html5/i);
    const htmlIcon = screen.getByRole('img', {
      name: /html5/i,
    });
    expect(htmlSkill).toBeInTheDocument();
    expect(htmlIcon).toBeInTheDocument();
  });
});
