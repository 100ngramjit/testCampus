import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar color="secondary" component="nav" sx={{ minHeight: "12vh" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          AirCampus{" "}
          <Button variant="contained" size="large">
            Programs
          </Button>
        </Box>
        <Box>
          <Button color="secondary" variant="contained" size="large">
            Start Learning
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
