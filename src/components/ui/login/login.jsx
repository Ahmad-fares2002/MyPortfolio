import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate } from "react-router-dom";

// Custom styled components for the layout
const BackgroundBox = styled(Box)(({ theme }) => ({
  background: "#192a56", // Dark blue background color
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  color: "white",
  padding: theme.spacing(4),
  textAlign: "left",
  flex: 1,
  maxWidth: "50%",
  [theme.breakpoints.down("md")]: {
    display: "none", // Hide welcome section on smaller screens
  },
}));

const LoginFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  width: "100%",
  backgroundColor: "white",
  maxWidth: 400,
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(4),
  },
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Role state is not directly used in the provided UI but kept for functionality
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = async () => {
    console.log("Login");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        localStorage.setItem("user", data);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const signup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(data.user);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <BackgroundBox>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <WelcomeSection>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Welcome Back
          </Typography>
          <Typography variant="h6">
            You can sign in to access with your existing account
          </Typography>
        </WelcomeSection>

        <LoginFormContainer>
          <Typography
            variant="h4"
            component="h2"
            color="primary.main"
            align="center"
            fontWeight="bold"
          >
            Sign In
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: { color: "primary.main" },
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            sx={{
              color: "primary.main",
            }}
            margin="normal"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: { color: "primary.main" },
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 1, mb: 2 }}
          >
            <Link
              href="#"
              variant="body2"
              underline="hover"
              color="text.secondary"
            >
              Forgot password?
            </Link>
          </Box>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ py: 1.5, textTransform: "none", mt: 2 }}
            onClick={login}
          >
            Sign In
          </Button>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              New here?{" "}
              <Link href="#" variant="body2" underline="hover" onClick={signup}>
                Create an Account
              </Link>
            </Typography>
          </Box>
        </LoginFormContainer>
      </Container>
    </BackgroundBox>
  );
};

export default Login;
