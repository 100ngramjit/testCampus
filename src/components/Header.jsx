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
import airCampus_logo from "../assets/logoaircampus.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Logo = styled("img")(({ theme }) => ({
  height: "auto",
  width: "75%",
  [theme.breakpoints.up("sm")]: {
    width: "200px",
  },
}));

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
      <AppBar color="secondary" position="fixed" component="nav">
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "14vh" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              [theme.breakpoints.up("sm")]: {
                justifyContent: "flex-start",
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { sm: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Logo src={airCampus_logo} alt="AirCampus Logo" />
            <Button
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                marginLeft: "16px",
              }}
              disableElevation
            >
              Programs
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              variant="text"
              size="large"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              More
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              sx={{ marginLeft: { xs: "8px", sm: "16px" } }}
            >
              Start Learning
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
