export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  offblack: "hsl(24deg 5% 6%)",
  gray: {
    100: "hsl(40deg 12% 95%)",
    300: "hsl(35deg 8% 80%)",
    500: "hsl(30deg 4% 60%)",
    700: "hsl(28deg 5% 40%)",
    900: "hsl(24deg 6% 16%)",
  },

  background: "hsl(44deg, 41%, 95%)",
  modal: "hsl(44deg 41% 95% / .7)",
  cart: "hsl(43deg, 88%, 97%)",

  secondary: "hsl(180deg 34% 37%)",
  urgent: "hsl(0deg 55% 54%)",
  CTA: "hsl(145deg, 9%, 35%)",
  creamV1: "hsl(49deg, 37%, 88%)",
};

// desktop first //
const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const WEIGHTS = {
  light: 250,
  normal: 400,
  medium: 550,
  bold: 700,
};

// desktop first //
export const QUERIES = {
  mobileAndBelow: `max-width:${BREAKPOINTS.mobileMax / 16}rem`,
  tabletAndBelow: `max-width:${BREAKPOINTS.tabletMax / 16}rem`,
  laptopAndBelow: `max-width:${BREAKPOINTS.laptopMax / 16}rem`,
};
