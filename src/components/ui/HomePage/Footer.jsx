import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Links from "./Links";
export default function Footer() {
  return (
    <Box width={"100%"}>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "white",
          pt: 3,
          pb: 1,
        }}
      >
        <Links color={(theme) => theme.palette.text.secondary}></Links>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #064a81, #64a7dd)",
            py: 2,
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Logo */}
            <Box>
              <img src="./Logo.png" alt="Logo" style={{ height: 40 }} />
            </Box>

            {/* Center: Social Icons */}
            <Box>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
            </Box>

            {/* Right: Text */}
            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
              Created by Ahmad
            </Typography>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
