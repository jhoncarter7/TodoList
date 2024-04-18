import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Provider} from 'react-redux'
import {persistor, store}  from "./redux/Storage.js";
import { PersistGate } from "redux-persist/integration/react";
const defaultTheme = createTheme(); //
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
      <PersistGate loading= {false} persistor={persistor} >
      <App />
      </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
