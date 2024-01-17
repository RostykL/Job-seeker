import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "src/App";
import ExpandPageProvider from "src/providers/ExpandPageProdiver";
import moment from "moment";
import { Provider } from "react-redux";
import { store } from "src/store/store";

moment().locale("uk_UA");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ExpandPageProvider>
        <App />
      </ExpandPageProvider>
    </Provider>
  </React.StrictMode>,
);
