import { Theme } from 'theme-ui';

import { baseTheme } from './base';

export const darkTempation: Theme = {
  ...baseTheme,

  // Foundations
  colors: {
    text: '#F6F4F',
    textError: '#FDBABA',
    background: '#2F2F2F',
    primary: '#ECC1F7',
    primaryLight: '#F3DEF9',
    primaryDark: '#C49ACE',
    secondary: '#B8DBDF',
    secondaryLight: '#D3ECEF',
    secondaryDark: '#90B3B7',
    highlight: '#787878',
    muted: '#414040',
    gray: '#A9A4B1',
    accent: '#C9ABD4',
    darken: '#919191',
    info: '#D1F2F9',
    success: '#CCEDCD',
    warning: '#F8F2C3',
    error: '#F8D2D2',
  },
};
