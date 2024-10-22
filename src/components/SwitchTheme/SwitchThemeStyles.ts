import { switchClasses } from '@mui/joy/Switch';

export const switchStyles = (
  switchBorderConditionalStyle: string,
  switchThumbConditionalStyle: string
) => ({
  border: `${switchBorderConditionalStyle}`,
  borderRadius: '50px',
  '--Switch-thumbSize': '26px',
  '--Switch-trackWidth': '70px',
  '--Switch-trackHeight': '35px',
  '--Switch-trackBackground': 'transparent',
  [`& .${switchClasses.thumb}`]: {
    transition: 'width 0.2s, left 0.2s',
    backgroundColor: `${switchThumbConditionalStyle}`,
  },
  '&:hover': {
    '--Switch-trackBackground': 'transparent',
  },
  '&:active': {
    '--Switch-thumbWidth': '32px',
  },
  [`&.${switchClasses.checked}`]: {
    '--Switch-trackBackground': 'transparent',
    '&:hover': {
      '--Switch-trackBackground': 'transparent',
    },
  },
  '@media (max-width: 425px)': {
    '--Switch-thumbSize': '20px',
    '--Switch-trackWidth': '50px',
    '--Switch-trackHeight': '30px',
  },
});
