import { Button, Container, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound(props) {
  const navigate = useNavigate();
  return (
    <Container sx={{ textAlign: "center", margin: "200px auto" }}>
      <Typography variant="h1" component="h1" fontWeight={700}>
        4 <TravelExploreIcon fontSize="inherit" /> 4
      </Typography>
      <Typography variant="h3" component="h3" fontWeight={500} mb={4}>
        Oops... Page Not Found
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate("/")}>
        Go home
      </Button>
    </Container>
  );
}

export default NotFound;
