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
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container ">
        <a
          class="navbar-brand d-flex align-items-center"
          onClick={() => navigate("/")}
        >
          <img src={airCampus_logo} alt="Logo" height="30" class="mr-2" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" onClick={() => navigate("/programs")}>
                Program
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                How to get in?
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
