import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

import { useNavigate, useLocation } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import LogInButton from "../LogInButton/LogInButton";

import logo from "../../assets/images/logo/logo.png";

const TopBar = () => {
  const { isLoggedIn } = useSelector(selectUser);

  const navigate = useNavigate();

  const location = useLocation();

  const pathCheck = (pathname) => {
    if (location.pathname === pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AppBar
      position="fixed"
      style={{
        left: 0,
        right: 0,
        top: 0,
        background: "white",
        boxShadow: "none",
      }}
    >
      <Toolbar
        style={{
          height: "64px",
          borderBottom: "2px solid #ccc",
          color: "grey",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginRight: "16px", cursor: "pointer" }}
          onClick={() =>
            isLoggedIn ? navigate("/meu-progresso") : navigate("/")
          }
        />

        <Typography
          variant="body2"
          style={{
            marginLeft: "30px",
            cursor: "pointer",
            color: pathCheck("/sobre-o-ime") ? "black" : "inherit",
          }}
          onClick={() => navigate("/sobre-o-ime")}
        >
          Sobre o IME
        </Typography>

        <Typography
          variant="body2"
          style={{
            marginLeft: "30px",
            cursor: "pointer",
            color: pathCheck("/sobre-o-site") ? "black" : "inherit",
          }}
          onClick={() => navigate("/sobre-o-site")}
        >
          Sobre o site
        </Typography>

        {isLoggedIn ? <UserMenu /> : <LogInButton />}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
