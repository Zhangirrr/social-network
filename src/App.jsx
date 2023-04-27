import React from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { store } from "./store";
import s from "./styles/main.scss";
import Router from "./Router";

function App() {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </SnackbarProvider>
  );
}

export default App;
