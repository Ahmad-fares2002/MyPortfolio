import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { MdViewAgenda } from "react-icons/md";
import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const jobList = [
  {
    title: "Immersive Experiences",
    description:
      "I build AR/VR apps and interactive experiences using cutting-edge technology.",
    icon: <ThreeDRotationIcon color="text" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Website Development",
    description:
      "Creating responsive and modern websites using React, HTML, CSS, and JS.",
    icon: <LanguageIcon color="text" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Courses",
    description:
      "Teaching game development, AR, and web tech to students in an engaging way.",
    icon: <MenuBookIcon color="text" sx={{ fontSize: 40 }} />,
  },
];

export default function WhatIDo() {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
      >
        {jobList.map((job, index) => (
          <Grid item size={{ xs: 12, sm: 10, md: 4 }}>
            <Paper
              elevation={4}
              sx={{
                background: (theme) =>
                  `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                px: { xs: 2, md: 4 },
                pt: { xs: 2, md: 4 },
                pb: { xs: 2, md: 10 },
              }}
            >
              <Box mt={2}>{job.icon}</Box>
              <Typography mt={2} fontSize={"1.5rem"}>
                {job.title}
              </Typography>
              <Typography mt={2}>{job.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
