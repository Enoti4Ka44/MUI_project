import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./shared/components/AppRouter";
import AuthPovider from "./shared/components/AuthProvider";
import { useState } from "react";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2caa5b",
    },
    secondary: {
      main: "#00695c",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif;",
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2caa5b",
    },
    secondary: {
      main: "#00695c",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif;",
  },
});

const responsiveDarkTheme = responsiveFontSizes(darkTheme);

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? responsiveDarkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthPovider>
          <AppRouter />
        </AuthPovider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
