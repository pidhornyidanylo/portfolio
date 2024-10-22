'use client';
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '@/store/ThemeContext';
import Switch from '@mui/joy/Switch';
import { switchStyles } from './SwitchThemeStyles';

const SwitchTheme = () => {
  const themeContext = useContext(ThemeContext);

  const switchBorderConditionalStyle = themeContext!.isDarkTheme
    ? '2px solid #cbd6ec'
    : '2px solid #5671A6';
  const switchThumbConditionalStyle = themeContext.isDarkTheme
    ? '#cbd6ec'
    : '#5671A6';

  return (
    <Switch
      checked={themeContext.isDarkTheme}
      onChange={() => themeContext.toggleThemeHandler()}
      sx={() =>
        switchStyles(switchBorderConditionalStyle, switchThumbConditionalStyle)
      }
    />
  );
};

export default SwitchTheme;
