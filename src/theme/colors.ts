import { Colors } from "./types";

export const baseColors = {
  failure: "#5641D8",
  primary: "#5641D8",
  primaryBright: "#5641D8",
  primaryDark: "#5641D8",
  secondary: "#5641D8",
  success: "#5641D8",
  warning: "#5641D8",
};

export const brandColors = {
  binance: "#5641D8",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#5641D8",
  backgroundDisabled: "#5641D8",
  contrast: "#5641D8",
  invertedContrast: "#5641D8",
  input: "#5641D8",
  tertiary: "#5641D8",
  text: "#5641D8",
  textDisabled: "#5641D8",
  textSubtle: "#5641D8",
  borderColor: "#5641D8",
  card: "#5641D8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#5641D8",
  background: "#5641D8",
  backgroundDisabled: "#5641D8",
  contrast: "#5641D8",
  invertedContrast: "#5641D8",
  input: "#5641D8",
  primaryDark: "#5641D8",
  tertiary: "#5641D8",
  text: "#5641D8",
  textDisabled: "#5641D8",
  textSubtle: "#5641D8",
  borderColor: "#5641D8",
  card: "#5641D8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
