import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import React, { useState } from "react";

function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!valid(email)) {
      setEmailError("Invalid email");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Passwords must be at least 8 characters");
      return;
    }

    if (password != confirmPassword) {
      setPasswordError("Passwords must match");
      return;
    }

    if (password && email && confirmPassword) {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    setEmailError(null);
    setPasswordError(null);
  };

  return (
    <Container
      maxWidth="xs"
      component="main"
      sx={{
        height: window.innerHeight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          px: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: "600", mt: 1 }}
        >
          Sign In
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ fontWeight: "500", mt: 1, mb: 2, color: "grey" }}
        >
          Enter your credentials to continue
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            size="small"
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            size="small"
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <TextField
            required
            id="confirmPassword"
            label="Confirm password"
            variant="outlined"
            type="password"
            name="confirmPassword"
            fullWidth
            margin="normal"
            size="small"
          />
          <Link
            href="#"
            variant="subtitle2"
            sx={{ fontWeight: "700", pl: 1 }}
            underline="hover"
          >
            Forgot password ?
          </Link>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            loading={loading}
            fullWidth
            disableElevation
            sx={{ mt: 4, mb: 1 }}
          >
            Sign In
          </Button>
        </Box>
        <Typography sx={{ mt: 1 }} variant="subtitle1">
          Don't have an account ?{" "}
          <Link href="/signup" sx={{ fontWeight: "500" }} underline="hover">
            Create one
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default SignIn;
