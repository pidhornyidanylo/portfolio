import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import About from './page';

describe('About component', () => {
  it('renders sections text content properly', () => {
    render(<About />);
    const summaryHeading = screen.getByRole('heading', {
      name: /summary/i,
    });
    const summaryParagraph = screen.getByText(
      /web developer with comprehensive expertise in javascript, typescript, and modern frameworks\. experienced in building dynamic, user\-focused web applications and skilled in optimizing for performance and user experience\. driven by a passion for continuous learning, especially in emerging technologies, and enthusiastic about contributing to innovative projects\. known for excellent problem\-solving skills and a collaborative mindset, always aiming to make a meaningful impact\./i
    );
    const qualificationHeading = screen.getByRole('heading', {
      name: /qalification my personal journey/i,
    });
    const qalificationSpan = screen.getByText(/my personal journey/i);
    expect(summaryHeading).toBeInTheDocument();
    expect(summaryParagraph).toBeInTheDocument();
    expect(qualificationHeading).toBeInTheDocument();
    expect(qalificationSpan).toBeInTheDocument();
  });
});
