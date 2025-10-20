import { createTheme, ThemeProvider } from "@mui/material";
import Auth from "./pages/Auth";

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
      <Auth />
    </ThemeProvider>
  );
}

export default App;
