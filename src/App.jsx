import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./shared/components/AppRouter";
import AuthPovider from "./shared/components/AuthProvider";
import { useState } from "react";

const lightTheme = createTheme({
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

const darkTheme = createTheme({
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

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
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
