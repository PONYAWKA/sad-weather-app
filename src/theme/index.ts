import { css } from "styled-components";

const padding = {
  s: 5,
};
const colors = {
  white: "#ffffff",
  black: "#012021",
  background: css`
    background-color: rgba(14, 13, 33, 0.8);
  `,
  red: "#dc143c",
  grayShadow: "#141f25",
};
const spaces = {
  ss: 5,
  s: 10,
  m: 20,
  ms: 26,
  mm: 40,
  mmm: 60,
  mmmm: 80,
  x: 100,
  xm: 160,
  xx: 200,
  xxx: 300,
  xxl: 400,
  l: 600,
  maxX: 1920,
  maxY: 1080,
};
const fonts = {
  s: 16,
  m: 24,
  x: 36,
  xx: 68,
  xxl: 72,
};

const breakPoints = {
  fold: 280,
  mobile: 426,
  tablet: 767,
  laptop: 1024,
  laptopH: 741,
  laptopW: 975,
  laptopL: 1310,
};
export const theme = { padding, colors, spaces, fonts, breakPoints };
