import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#99A3FF",
  primaryBright: "#99A3FF",
  primaryDark: "#99A3FF",
  secondary: "#99A3FF",
  success: "#31D0AA",
  warning: "#99A3FF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0F0B25",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#171333",
  tertiary: "#99A3FF",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "#110D2A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "rgba(86,65,216,0.4)",
  background: "#0F0B25",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#171333",
  primaryDark: "#99A3FF",
  tertiary: "#99A3FF",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#110D2A",
  gradients: {
    bubblegum: "linear-gradient(180deg, #99A3FF 0%, #6199C1 100%)",
  },
};