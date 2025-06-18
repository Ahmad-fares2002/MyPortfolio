import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Spline from "@splinetool/react-spline";
import EditAboutMeForm from "./EditAboutMeForm"; // ← import

export default function AboutMeSection({
  title,
  content,
  isAdmin,
  updateContent,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (newTitle, newContent) => {
    await updateContent(newTitle, newContent);
    setIsEditing(false);
  };
  useEffect(() => {
    console.log(localStorage.getItem("user"));
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 3, md: 6 },
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
        {isEditing ? (
          <EditAboutMeForm
            initialTitle={title}
            initialContent={content}
            onUpdate={handleUpdate}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: "bold",
                mt: 2,
                fontSize: { xs: "2rem", md: "3.5rem" },
                lineHeight: 1.2,
                color: "primary.main",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                mt: 3,
                fontSize: { xs: "1.25rem", md: "2rem" },
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
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.5,
              }}
            >
              {content}
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

            {isAdmin && (
              <Button
                onClick={() => setIsEditing(true)}
                variant="outlined"
                sx={{ mt: 2, ml: 2 }}
              >
                Edit
              </Button>
            )}
          </>
        )}
      </Container>

      <Box
        sx={{
          width: { xs: "80%", md: "500px" },
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
