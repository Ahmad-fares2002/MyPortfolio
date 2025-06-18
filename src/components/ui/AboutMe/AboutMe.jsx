import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Dialog,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// The updated infoList based on the user's request and image analysis
// Using placeholder images for non-uploaded characters for demonstration
const infoList = [
  {
    character: "./Jimmy_neutro.png",
    name: "The Developer",
    color: "linear-gradient(to bottom, #64A7DD, #064A81)", // Light blue to blue
  },
  {
    character: "./Ironman.png", // Using the uploaded Iron Man image
    name: "The entrepreneur",
    color: "linear-gradient(to bottom, #F47878, #FF3131)", // Light red to red
  },
  {
    character: "./Shifu.png", // Using the uploaded Iron Man image
    name: "The Teacher",
    color: "linear-gradient(to bottom, #ff914d, #e09c72)", // Light orange to orange
  },
  {
    character: "./Lewis_robinson.png", // Using the uploaded Iron Man image
    name: "The Developer", // Keeping original name as it's not fully visible in image
    color: "linear-gradient(to bottom, #F7D28C, #F0A300)", // Light blue to dark blue
  },
];

function App() {
  const [currentPage, setCurrentPage] = React.useState(0); // State to manage current page for navigation

  // Function to handle next page
  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % infoList.length);
  };

  // Function to handle previous page
  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + infoList.length) % infoList.length
    );
  };

  // Determine which card to display based on currentPage
  const displayCard = infoList[currentPage];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#333",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textAlign: "left",
          width: { xs: "100%", sm: "100%", md: "50%" },
        }}
      >
        Which Ahmad's character you would like to know more about?
      </Typography>

      <Box
        sx={{
          m: "auto",
          gap: 4,
          width: { xs: "40%", sm: "300px", md: "300px" }, // Responsive width
          mb: 4,
        }}
      >
        <Card
          sx={{
            width: "100%",
            background: displayCard.color,
            alignItems: "center",
            p: 2,
            position: "relative",
            overflow: "visible",
            pt: { xs: "75px", sm: "100px" }, // Add top padding to create space for the image to stick out
          }}
        >
          <CardMedia
            component="img"
            sx={{
              position: "absolute",
              top: { xs: "-25px", sm: "-40px" },
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "150px", sm: "200px" },
              height: { xs: "150px", sm: "200px" },
              objectFit: "contain",
              zIndex: 1, //  image is above card content
            }}
            image={displayCard.character}
            alt={displayCard.name}
          />
          <CardContent
            sx={{
              width: "50%",
              m: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                textAlign: "center",
                mt: 6,
              }}
            >
              {displayCard.name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <IconButton
          onClick={handlePrev}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          <ArrowBackIos />
        </IconButton>
        <Typography variant="body1" sx={{ mx: 2, color: "#555" }}>
          <span style={{ fontWeight: "bold" }}>{currentPage + 1}</span> of{" "}
          {infoList.length}
        </Typography>
        <IconButton
          onClick={handleNext}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}

export default App;
