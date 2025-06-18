import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Spline from "@splinetool/react-spline";

export default function AboutMeSection() {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 6 },
        px: 10,
        display: "flex",
        gap: { xs: 5, md: 12 },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          margin: 0,
          maxWidth: { xs: "90%", md: "100%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: "#000",
            fontWeight: "bold",
            mt: 2,
            fontSize: { xs: "2rem", md: "3.5rem" }, // bigger on md+
            lineHeight: 1.2,
            color: "primary.main",
          }}
        >
          Hello I am Ahmad
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#000",
            fontWeight: "bold",
            mb: 2,
            mt: 3,
            fontSize: { xs: "1.25rem", md: "2rem" }, // bigger on md+
          }}
        >
          XR Developer, Innovator, and Entrepreneur
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            mb: 3,
            maxWidth: "600px",
            mx: { xs: "auto", md: "unset" },
            mt: 3,
            fontSize: { xs: "1rem", md: "1.25rem" }, // bigger paragraph text
            lineHeight: 1.5,
          }}
        >
          passionate about blending cutting-edge technology with creative
          marketing solutions. I specialize in immersive AR experiences and
          digital storytelling to help brands connect with their audiences in
          fresh, impactful ways.
        </Typography>
        <Button
          variant="contained"
          sx={{
            p: { xs: "10px 2%", md: "16px 4%" },
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            textTransform: "uppercase",
            width: { xs: "70%", md: "30%" },
            mt: 3,
          }}
        >
          ABOUT ME
        </Button>
      </Container>
      <Box
        sx={{
          width: { xs: "80%", md: "500px" }, // bigger on md+
          height: { xs: "auto", md: "500px" },
          justifyContent: "center",
          alignItems: "center",
          display: { md: "flex", xs: "none" },
        }}
      >
        <Spline scene="https://prod.spline.design/elfmgiPmDNjAGxQG/scene.splinecode" />
      </Box>
    </Box>
  );
}
