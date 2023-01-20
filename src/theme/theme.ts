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
};
const spaces = {
  ss: 5,
  s: 10,
  m: 20,
  mm: 40,
  x: 100,
  xx: 200,
  xxl: 400,
};
const fonts = {
  m: 24,
  x: 36,
  xx: 68,
  xxl: 72,
};
export const theme = { padding, colors, spaces, fonts };
