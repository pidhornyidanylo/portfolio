import { Theme } from '@mui/joy';
import { accordionClasses } from '@mui/joy/Accordion';

export const accordionGroupStyles = (theme: Theme) => ({
  maxWidth: '100%',
  marginRight: '50px',
  [`& .${accordionClasses.root}`]: {
    transition: '0.2s ease',
    '& button': {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 'md',
      padding: '.7em',
    },
    '& button:not([aria-expanded="true"])': {
      transition: '0.2s ease',
      padding: '.7em',
    },
    '& button:hover': {
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      padding: '.7em',
    },
  },
  [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
    bgcolor: 'transparent',
    borderRadius: 'md',
  },
  '& [aria-expanded="true"]': {
    boxShadow: `inset 0 -1px 0 ${theme.vars.palette.divider}`,
  },
  '@media (max-width: 425px)': {
    marginRight: '10px',
  },
});

export const typographyStyles = {
  flex: 1,
  fontSize: '1.3em',
  '@media (max-width: 425px)': {
    fontSize: '1em',
  },
};

export const accordionStyles = {
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
