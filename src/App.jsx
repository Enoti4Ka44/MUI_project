import Search from "./components/Search";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import SignIn from "./pages/SignIn";

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
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
