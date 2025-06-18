import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./components/ui/login/login";
import AppLayout from "./AppLayout";

const theme = createTheme({
  fontSize: 200,
  shape: {
    borderRadius: "10px", // Applies to all components that respect shape
  },
  palette: {
    primary: {
      main: "#064a81", // Dark Blue for buttons and main elements
    },
    secondary: {
      main: "#64a7dd", // Light Blue for accents
    },

    text: {
      secondary: "#000000",
      primary: "#ffffff", // White text
    },
    background: "#000000",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&::first-letter": {
            textTransform: "capitalize",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          background: "linear-gradient(45deg, #064a81 30%, #64a7dd 90%)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
