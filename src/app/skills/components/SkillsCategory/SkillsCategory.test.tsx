import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SkillsCategory from './SkillsCategory';

describe('SkillsCategory component', () => {
  beforeEach(() => {
    render(
      <SkillsCategory
        skillset={[
          {
            title: 'HTML5',
            progress: 85,
            iconUrl: '/assets/icons/skills/html.svg',
          },
          {
            title: 'CSS3',
            progress: 85,
            iconUrl: '/assets/icons/skills/css.svg',
          },
          {
            title: 'JavaScript (ES6+)',
            progress: 85,
            iconUrl: '/assets/icons/skills/javascript.svg',
          },
        ]}
        title={'Languages & Frameworks'}
        icon={'/assets/icons/skills/categorie/frame.svg'}
      />
    );
  });
  it('renders properly', () => {
    const skillsetTitle = screen.getByText(/languages & frameworks/i);
    expect(skillsetTitle).toBeInTheDocument();
  });
  it('shows skills after clicking button', () => {
    const button = screen.getByRole('button', {
      name: /languages & frameworks languages & frameworks/i,
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const htmlSkill = screen.getByText(/html5/i);
    const cssSkill = screen.getByText(/css3/i);
    const jsSkill = screen.getByText(/javascript \(es6\+\)/i);
    expect(htmlSkill).toBeVisible();
    expect(cssSkill).toBeVisible();
    expect(jsSkill).toBeVisible();
  });
  it('hides skills after clicking button twice', () => {
    const button = screen.getByRole('button', {
      name: /languages & frameworks languages & frameworks/i,
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const htmlSkill = screen.getByText(/html5/i);
    const cssSkill = screen.getByText(/css3/i);
    const jsSkill = screen.getByText(/javascript \(es6\+\)/i);
    expect(htmlSkill).toBeVisible();
    expect(cssSkill).toBeVisible();
    expect(jsSkill).toBeVisible();
    fireEvent.click(button);
    expect(htmlSkill).not.toBeVisible();
    expect(cssSkill).not.toBeVisible();
    expect(jsSkill).not.toBeVisible();
  });
});
