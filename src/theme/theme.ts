import { color } from "@/constants";

const padding = {
  s: 5,
};
const colors = {
  white: color.white,
  black: color.black,
  background: color.gray,
  red: color.red,
};
const spaces = {
  ss: 5,
  s: 10,
  m: 20,
  mm: 40,
  x: 100,
  xm: 160,
  xx: 200,
  xxx: 300,
  xxl: 400,
};
const fonts = {
  m: 24,
  x: 36,
  xx: 68,
  xxl: 72,
};

const breakPoints = {
  mobile: 426,
  tablet: 767,
  laptop: 1024,
  laptopH: 741,
  laptopW: 975,
  laptopL: 1310,
};
export const theme = { padding, colors, spaces, fonts, breakPoints };
