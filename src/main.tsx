import "./assets/css/index.css";
import "./features/i18n.ts";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { ROOT } from "./config.ts";
import { $ID, root } from "./utils/index.ts";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import GlobalCTX from "./store/context/global.tsx";

const app = root($ID(ROOT));

app.render(
  <Provider store={store}>
    <GlobalCTX>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </GlobalCTX>
  </Provider>,
);
