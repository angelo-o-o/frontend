import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

function ThemeWrapper({ children }) {
  const { mode } = useTheme();
  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
