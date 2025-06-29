import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function EditAboutMeForm({
  initialTitle,
  initialContent,
  onUpdate,
  onCancel,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(title, content);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        variant="outlined" // or "standard", "filled"
        InputProps={{
          style: {
            color: "black", // Text color
            border: "none", // Only works if you override default styles
          },
        }}
        InputLabelProps={{
          style: {
            color: "black", // Label color
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Removes the border
            },
          },
        }}
      />
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
            color: "black", // Text color
            border: "none", // Only works if you override default styles
          },
        }}
        InputLabelProps={{
          style: {
            color: "black", // Label color
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Removes the border
            },
          },
        }}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
