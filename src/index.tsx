import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persister, store } from "store/index";
import { ThemeProvider } from "styled-components";

import { HomePage } from "@/pages/Home";
import { GlobalStyle } from "@/utils/globalStyle";
import { theme } from "@/utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HomePage />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </Suspense>
);
