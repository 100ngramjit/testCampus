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
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container ">
        <a
          className="navbar-brand d-flex align-items-center"
          onClick={() => navigate("/")}
        >
          <img src={airCampus_logo} alt="Logo" height="30" className="mr-2" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={() => navigate("/programs")}>
                Program
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How to get in?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
