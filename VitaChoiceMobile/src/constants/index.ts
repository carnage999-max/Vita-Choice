// Design system constants matching the Next.js website
export const COLORS = {
  background: '#0B0C0E',
  surface: '#14161A',
  backgroundSecondary: '#14161A',
  cardBackground: '#262A31',
  textPrimary: '#F5F7FA',
  textMuted: '#B7C0CD',
  accentTeal: '#2EE6D6',
  accentBlue: '#2EA7FF',
  border: '#262A31',
  success: '#2ECC71',
  warning: '#F5A623',
  error: '#FF5A5F',
  white: '#FFFFFF',
  black: '#000000',
};

export const GRADIENTS = {
  primary: [COLORS.accentTeal, COLORS.accentBlue],
  card: [COLORS.surface, COLORS.cardBackground],
  background: [COLORS.background, COLORS.surface],
  error: ['#FF5A5F', '#e74c3c'],
};

export const TYPOGRAPHY = {
  h1: 44,
  h2: 32,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,
  body: 16,
  button: 16,
  caption: 12,
  small: 10,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
};