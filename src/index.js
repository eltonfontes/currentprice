import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

import { Container, GlobalStyle } from "./styles";

import Index from "./pages/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle theme="dark" />
    <Provider store={store}>
      <Container>
        <Index />
      </Container>
    </Provider>
  </React.StrictMode>
);
