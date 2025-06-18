import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { VscNoNewline } from "react-icons/vsc";
import Links from "./Links";

export default function Header() {
  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <Box>
        <img src="/Logo.png" alt="Logo" style={{ height: 40 }} />
      </Box>

      <Links color={(theme) => theme.palette.text.primary}></Links>
    </Box>
  );
}
