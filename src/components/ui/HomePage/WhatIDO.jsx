import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Grid, TextField, Button } from "@mui/material";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { MdViewAgenda } from "react-icons/md";
import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Add, Delete, Edit, Update } from "@mui/icons-material";

export default function WhatIDo() {
  let jobList = [];
  const [cards, setCards] = useState([]);
  const [showNewCard, setShowNewCard] = useState(false);

  const API_URL = import.meta.env.VITE_BASE_URL;
  const userRole = localStorage.getItem("user");
  const isAdmin = userRole == "admin";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log("Hello");
    fetch(`${API_URL}/api/cards`)
      .then((response) => response.json())
      .then((data) => {
        setCards(
          data.map((card) => ({
            ...card,
            isEditing: false,
            tempTitle: card.title,
            tempDescription: card.description,
          }))
        );
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const toggleEditMode = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };
  const handleEditChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };
  const saveEdit = (id) => {
    setCards((prev) => {
      const updatedCards = prev.map((card) => {
        if (card.id === id) {
          // Save the temp values
          updateCard(id, card.tempTitle, card.tempDescription);
          return {
            ...card,
            title: card.tempTitle,
            description: card.tempDescription,
            isEditing: false,
          };
        }
        return card;
      });
      return updatedCards;
    });
  };

  async function createCard(title, description) {
    console.log(description);
    const response = await fetch(`${API_URL}/api/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-role": isAdmin ? "admin" : "user",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) throw new Error("Failed to create card");
    const data = await response.json();
    const newCard = data.section;
    console.log(data.section);
    setCards((prevCards) => [...prevCards, newCard]);
    setShowNewCard(false);
  }
  async function deleteCard(id) {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    const response = await fetch(`${API_URL}/api/cards/${id}`, {
      method: "DELETE",
      headers: {
        "x-role": isAdmin ? "admin" : "user",
      },
    });

    if (!response.ok) throw new Error("Failed to delete card");
    return await response.json();
  }

  async function updateCard(id, title, description) {
    const response = await fetch(`${API_URL}/api/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": isAdmin ? "admin" : "user",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) throw new Error("Failed to update card");
    return await response.json();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(title, content);
  };
  const iconStyles = (top) => ({
    position: "absolute",
    top,
    right: "-20px",
    transform: "translateY(-50%) scale(0.8)",
    transition: "all 0.3s ease",
    opacity: 0,
    color: "white",
    backgroundColor: "primary.main",
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  });

  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
      >
        {cards.map((job) => (
          <Grid item key={job.id} xs={12} sm={10} md={4}>
            {job.isEditing ? (
              <Box
                sx={{
                  background: (theme) =>
                    `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  px: { xs: 2, md: 4 },
                  pt: { xs: 2, md: 4 },
                  pb: { xs: 2, md: 10 },
                  borderRadius: "10px",
                }}
              >
                <TextField
                  value={job.tempTitle}
                  onChange={(e) =>
                    handleEditChange(job.id, "tempTitle", e.target.value)
                  }
                  fullWidth
                  margin="dense"
                />
                <TextField
                  value={job.tempDescription}
                  onChange={(e) =>
                    handleEditChange(job.id, "tempDescription", e.target.value)
                  }
                  fullWidth
                  margin="dense"
                  multiline
                  InputProps={{
                    style: {
                      color: "white", // Text color
                      border: "none", // Only works if you override default styles
                    },
                  }}
                />
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Button
                    onClick={() => saveEdit(job.id)}
                    size="small"
                    variant="contained"
                  >
                    Save
                  </Button>
                  <Button onClick={() => toggleEditMode(job.id)} size="small">
                    Cancel
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  position: "relative",
                  "&:hover .plus-icon": {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                }}
              >
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
                  <Typography mt={2} fontSize={"1.5rem"}>
                    {job.title}
                  </Typography>
                  <Typography mt={2}>{job.description}</Typography>
                </Paper>

                {/* Add */}
                <Box className="plus-icon" sx={iconStyles("50%")}>
                  <Add fontSize="large" onClick={() => setShowNewCard(true)} />
                </Box>

                {/* Delete */}
                <Box className="plus-icon" sx={iconStyles("10%")}>
                  <Delete fontSize="large" onClick={() => deleteCard(job.id)} />
                </Box>

                {/* Edit */}
                <Box className="plus-icon" sx={iconStyles("80%")}>
                  <Edit
                    fontSize="large"
                    onClick={() => toggleEditMode(job.id)}
                  />
                </Box>
              </Box>
            )}
          </Grid>
        ))}

        {/* New Card Form */}
        {showNewCard && (
          <Grid item xs={12} sm={10} md={4}>
            <Paper
              elevation={4}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                background: (theme) =>
                  `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                px: { xs: 2, md: 4 },
                pt: { xs: 2, md: 4 },
                pb: { xs: 2, md: 10 },
              }}
            >
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
                InputProps={{
                  style: {
                    color: "black",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
              />
              <TextField
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                rows={4}
                required
                InputProps={{
                  style: {
                    color: "black",
                    border: "none",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
                <Button
                  onClick={() => {
                    setShowNewCard(false);
                    setTitle("");
                    setContent("");
                  }}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
