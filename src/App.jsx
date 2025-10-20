import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./shared/components/AppRouter";
import AuthPovider from "./shared/components/AuthProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#f06292",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif;",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthPovider>
          <AppRouter />
        </AuthPovider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
