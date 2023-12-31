export * from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
  }
  interface CommonColors {
    black: string;
    white: { [key: string]: string };
    base: string;
  }
}

declare module '@mui/material' {
  interface Color {
    main?: string;
    [1]?: string;
    [2]?: string;
    [3]?: string;
    [4]?: string;
    [5]?: string;
    [6]?: string;
    shadow?: string;
    black?: string;
  }
  interface Theme {
    border?: {
      default: string;
      error: string;
      solid: string[];
    };
  }
  interface Palette {
    extra?: {
      main: string;
    };
    negative?: {
      main: string;
    };
  }
  interface PaletteOptions {
    extra?: {
      main: string;
    };
    negative?: {
      main: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    filters: true;
  }
}
