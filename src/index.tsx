import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HomePage } from "./pages/Home";
import { persistor, store } from "store/index";
import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import { PersistGate } from "redux-persist/integration/react";
import { GloabalStyle } from "utils/globalStyle";

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
