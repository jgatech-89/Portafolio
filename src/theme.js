import { createTheme } from '@mui/material/styles';

// Paleta corporativa JGA TECH — minimalismo premium en blanco y negro.
const palette = {
  black: '#0A0A0A',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  surface: '#FAFAFA',
  border: 'rgba(10,10,10,0.08)',
  mediumGray: '#BDBDBD',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.black,
      contrastText: palette.white,
    },
    secondary: {
      main: palette.mediumGray,
      contrastText: palette.black,
    },
    background: {
      default: palette.white,
      paper: palette.white,
    },
    text: {
      primary: palette.black,
      secondary: '#595959',
    },
    divider: 'rgba(10,10,10,0.08)',
    // Alinea common.black/white con la paleta corporativa (usado en sx).
    common: {
      black: palette.black,
      white: palette.white,
    },
    // Tokens personalizados accesibles desde theme.palette.brand
    brand: palette,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
      fontSize: '1.0625rem',
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 26,
          paddingBlock: 11,
          fontSize: '0.95rem',
          transition: 'transform .25s ease, background-color .25s ease, color .25s ease, border-color .25s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          backgroundColor: palette.black,
          color: palette.white,
          '&:hover': {
            backgroundColor: '#1c1c1c',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(10,10,10,0.25)',
          color: palette.black,
          '&:hover': {
            borderColor: palette.black,
            backgroundColor: 'rgba(10,10,10,0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
