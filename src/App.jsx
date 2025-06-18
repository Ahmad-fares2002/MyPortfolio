import { Box, Button } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/App.css";
import Header from "./components/ui/HomePage/Header";
import AboutMe from "./components/ui/AboutMe/AboutMe";
import Footer from "./components/ui/HomePage/Footer";
import HomePage from "./components/ui/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
