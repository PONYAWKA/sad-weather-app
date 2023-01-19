import { ThemeProvider } from "styled-components";

import { HomePage } from "@/pages/Home";
import { theme } from "@/theme/theme";
import { GlobalStyle } from "@/utils/globalStyle";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};
