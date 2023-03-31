import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import airCampus_logo from "../../assets/logoaircampus.png";
import React from "react";

import "./style.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const theme = useTheme();

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(isOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemButton>
          <ListItemText primary="Programs" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="More" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <nav class="navbar navbar_custom justify-content-between">
        <div className="container">
          <img src={airCampus_logo} width="200" />
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Start Learning
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
