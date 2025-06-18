import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Alias react-router-dom's Link
import { Link } from "@mui/material"; // Import MUI's Link

export default function Links({ color }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiButton-root": {
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          padding: { xs: "4px 8px", sm: "6px 12px" },
          background: "none",
          color: color,
        },
      }}
      gap={2}
    >
      <Link
        to="/"
        value="text"
        color="#ffffff"
        component={RouterLink}
        sx={{
          color: color, // Default text color is white
          textDecoration: "none", // Remove default underline
          marginRight: 2,
          "&:hover": {
            color: "black", // Lighter white on hover (subtle change)
            textDecoration: "underline", // Add underline on hover
          },
          // If you want a background on hover:
        }}
      >
        Home
      </Link>
      <Button href="" value="text">
        Projects
      </Button>
      <Link
        component={RouterLink}
        to="/aboutme"
        sx={{
          color: color, // Default text color is white
          textDecoration: "none", // Remove default underline
          marginRight: 2,
          "&:hover": {
            color: "black", // Lighter white on hover (subtle change)
            textDecoration: "underline", // Add underline on hover
          },
          // If you want a background on hover:
        }}
      >
        About
      </Link>
      <Button
        href=""
        value="text"
        onClick={() => {
          localStorage.setItem("user", "");
        }}
      >
        logout
      </Button>
    </Box>
  );
}
