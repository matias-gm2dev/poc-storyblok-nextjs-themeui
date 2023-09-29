import { Theme, ThemeUIStyleObject } from 'theme-ui';

const baseAlert: ThemeUIStyleObject = {
  color: 'text',
  fontWeight: 'body',
  px: 'sm',
};

const baseBadge: ThemeUIStyleObject = {
  fontSize: 'xs',
  px: 'xs',
  lineHeight: 'loose',
  fontWeight: 'body',
};

const baseButton: ThemeUIStyleObject = {
  fontFamily: 'body',
  px: 'md',
  py: 'sm',
  border: '1px solid transparent',
  bg: 'transparent',
  lineHeight: 'tight',
};

const baseField: ThemeUIStyleObject = {
  p: 'sm',
  borderColor: 'gray',
  minWidth: '15rem',
  '&:hover': { borderColor: 'primaryLight' },
  '&:focus, &:focus-visible': {
    borderColor: 'primary',
    outline: 'solid 1px',
    outlineColor: 'primary',
  },
};

export const baseTheme: Theme = {
  //Config
  config: {
    initialColorModeName: 'light',
    useCustomProperties: true, // Esto habilita el soporte de CSS variables personalizadas
  },
  // Foundations
  space: {
    none: 0,
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    '2xl': '8rem',
    '3xl': '16rem',
    '4xl': '32rem',
  },
  fonts: {
    body: 'var(--font-body)',
    heading: 'var(--font-heading)',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '6rem',
  },
  fontWeights: {
    light: 300,
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.25,
    loose: 1.5,
    tight: 1.1,
  },
  colors: {
    text: '#14082C',
    textError: '#8B1111',
    background: '#F8FAFD',
    primary: '#126FC0',
    primaryLight: '#6AA1D1',
    primaryDark: '#124674',
    secondary: '#AE4986',
    secondaryLight: '#C383A9',
    secondaryDark: '#6F3658',
    highlight: '#EFF6F6',
    muted: '#EDE9E9',
    gray: '#8A8281',
    accent: '#281F6C',
    darken: '#BFBFBF',
    info: '#D1F2F9',
    success: '#CCEDCD',
    warning: '#F8F2C3',
    error: '#F8D2D2',
    modes: {
      dark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
      },
    },
  },
  text: {
    default: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 'md',
      color: 'text',
    },
    body2: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 'sm',
      color: 'text',
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 'xs',
      color: 'text',
    },
  },
  radii: {
    none: 0,
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '100rem',
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '1px 4px 12px 2px rgba(0, 0, 0, 0.1), 0px -2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  },
  sizes: {
    container: '75rem',
  },
  // Elements Styles
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '5xl',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '4xl',
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '3xl',
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '2xl',
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 'xl',
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 'lg',
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    progress: {
      bg: 'muted',
      height: 8,
      borderRadius: 'none',
    },
    spinner: {
      bg: 'muted',
    },
  },
  // Componentes Styles
  alerts: {
    info: {
      ...baseAlert,
      bg: 'info',
    },
    success: {
      ...baseAlert,
      bg: 'success',
    },
    warning: {
      ...baseAlert,
      bg: 'warning',
    },
    error: {
      ...baseAlert,
      bg: 'error',
    },
  },
  badges: {
    primary: {
      ...baseBadge,
      bg: 'primary',
    },
    secondary: {
      ...baseBadge,
      bg: 'secondary',
    },
  },
  buttons: {
    containedPrimary: {
      ...baseButton,
      bg: 'primary',
      '&:hover': { bg: 'primaryLight' },
      '&:focus': { bg: 'primaryDark' },
    },
    containedSecondary: {
      ...baseButton,
      bg: 'secondary',
      '&:hover': { bg: 'secondaryLight' },
      '&:focus': { bg: 'secondaryDark' },
    },
    outlinedPrimary: {
      ...baseButton,
      borderColor: 'primary',
      color: 'primary',
      '&:hover': {
        borderColor: 'primaryLight',
        color: 'primaryLight',
      },
      '&:focus': {
        borderColor: 'primaryDark',
        color: 'primaryDark',
      },
    },
    outlinedSecondary: {
      ...baseButton,
      borderColor: 'secondary',
      color: 'secondary',
      '&:hover': {
        borderColor: 'secondaryLight',
        color: 'secondaryLight',
      },
      '&:focus': {
        borderColor: 'secondaryDark',
        color: 'secondaryDark',
      },
    },
    text: {
      ...baseButton,
      color: 'gray',
      '&:hover': {
        color: 'text',
      },
      '&:focus': {
        color: 'accent',
      },
    },
    textPrimary: {
      ...baseButton,
      color: 'primary',
      '&:hover': {
        color: 'primaryLight',
      },
      '&:focus': {
        color: 'primaryDark',
      },
    },
    textSecondary: {
      ...baseButton,
      color: 'secondary',
      '&:hover': {
        color: 'secondaryLight',
      },
      '&:focus': {
        color: 'secondaryDark',
      },
    },
    icon: {
      size: '2.5rem',
      p: 'sm',
      borderRadius: 'full',
      color: 'text',
      '&:hover': { color: 'gray' },
      '&:focus': { color: 'accent', bg: 'highlight' },
      '&:disabled': { color: 'muted' },
    },
  },
  forms: {
    input: {
      ...baseField,
    },
    textarea: {
      ...baseField,
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'tight',
    },
    checkbox: {
      color: 'gray',
    },
    radio: {
      color: 'gray',
    },
    switch: {
      bg: 'muted',
    },
  },
};
