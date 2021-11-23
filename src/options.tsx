import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { AppBar, CssBaseline, IconButton, ThemeOptions, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/system";
import AppHeader from "./components/AppHeader";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f2f5f9",
    },
  },
};
const theme = createTheme(themeOptions);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader/>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
