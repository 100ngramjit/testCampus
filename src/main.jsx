import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MobileViewProvider from "./context/WindowSizeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MobileViewProvider>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </MobileViewProvider>
);
