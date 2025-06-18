import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

export default function ContactMe() {
  return (
    <Box
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        p: 7,
      }}
    >
      <Container
        sx={{
          bgcolor: "primary.main",
          m: "auto",
          py: 4,
          px: 5,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize="2rem" width={"40%"} fontWeight={"bold"}>
          Let's work together on your next project
        </Typography>
        <Container
          sx={{
            width: "40%",
            textAlign: "right",
          }}
        >
          <Button
            value="outlined"
            sx={{
              background: "none",
              bgcolor: "white",
              color: "primary.main",
              px: 4,
              py: 2,
            }}
            href="tel:+1234567890"
          >
            Contact Me
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
