import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/index";
import { ThemeProvider } from "styled-components";

import { HomePage } from "@/pages/Home";
import { GloabalStyle } from "@/utils/globalStyle";
import { theme } from "@/utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GloabalStyle />
          <HomePage />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </Suspense>
);
