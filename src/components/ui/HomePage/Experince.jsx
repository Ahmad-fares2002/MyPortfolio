import { Box, Grid, Container, Typography, Paper } from "@mui/material";
import React from "react";
const infoList = [
  {
    value: "+5",
    description: "clients",
  },
  {
    value: "+5",
    description: "clients",
  },
  {
    value: "+20",
    description: "Projects",
  },
  {
    value: "4",
    description: "Achievements",
  },
];
export default function Experince() {
  return (
    <Grid container spacing={4} alignItems="center">
      {/* Left side: Experience years */}
      <Grid item size="grow">
        <Box textAlign="center">
          <Typography color="primary.main" fontSize={100} fontWeight="bold">
            4
          </Typography>
          <Typography color="background" fontSize={20} fontWeight="bold">
            Years Experience
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        size="grow"
        container
        rowSpacing={4}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        padding={10}
      >
        {infoList.map((info, index) => (
          <Grid item size={{ xs: 12, sm: 10, md: 6 }}>
            <Paper
              elevation={4}
              sx={{
                background: (theme) =>
                  `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                py: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
                fontSize: 40,
                textAlign: "center",
              }}
            >
              <Typography fontSize={40} fontWeight={"bold"}>
                {info.value}
              </Typography>
              <Typography mt={1} fontWeight={"bold"}>
                {info.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
