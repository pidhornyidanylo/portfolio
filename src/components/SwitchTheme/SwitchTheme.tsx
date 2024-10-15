'use client';
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '@/store/ThemeContext';
import Switch, { switchClasses } from '@mui/joy/Switch';

const SwitchTheme = () => {
  const themeContext = useContext(ThemeContext);

  const switchBorderDependentStyle = themeContext!.isDarkTheme
    ? '2px solid #cbd6ec'
    : '2px solid #5671A6';
  const switchThumbDependentStyles = themeContext.isDarkTheme
    ? '#cbd6ec'
    : '#5671A6';

  return (
    <Switch
      checked={themeContext.isDarkTheme}
      onChange={() => themeContext.toggleThemeHandler()}
      sx={() => ({
        border: `${switchBorderDependentStyle}`,
        borderRadius: '50px',
        '--Switch-thumbSize': '26px',
        '--Switch-trackWidth': '70px',
        '--Switch-trackHeight': '35px',
        '--Switch-trackBackground': 'transparent',
        [`& .${switchClasses.thumb}`]: {
          transition: 'width 0.2s, left 0.2s',
          backgroundColor: `${switchThumbDependentStyles}`,
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
      })}
    />
  );
};

export default SwitchTheme;
