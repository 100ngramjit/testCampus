import { AppBar, Box, Button, Toolbar } from "@mui/material";
import airCampus_logo from "../assets/logoaircampus.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

const Header = () => {
  return (
    <AppBar color="secondary" component="nav" sx={{ minHeight: "12vh" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={airCampus_logo}
            style={{ height: "65px", width: "200px", paddingTop: "20px" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ m: 3 }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Programs
          </Button>
        </div>
        <Box>
          <Button
            color="inherit"
            variant="text"
            size="large"
            endIcon={<KeyboardArrowDownIcon />}
          >
            More
          </Button>
          <Button color="inherit" variant="outlined" size="large">
            Start Learning
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
