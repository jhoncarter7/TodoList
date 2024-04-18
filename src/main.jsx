import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Provider} from 'react-redux'
import {store}  from "./redux/Storage.js";
const defaultTheme = createTheme(); //
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
