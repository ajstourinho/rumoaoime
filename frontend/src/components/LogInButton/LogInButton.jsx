import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// Imports for custom button
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from '@mui/icons-material/Google';
// Get data from access_token
import axios from "axios";

import { useDispatch } from "react-redux";
import { logInUser } from "../../store/slices/userSlice";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/axiosInstance';
import { useTheme } from '@mui/material';

const LogInButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const logInMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  // Login for custom button
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            }
          }
        );

        const userData = {
          username: res.data.name,
          email: res.data.email,
          pictureUrl: res.data.picture,
        }

        axiosInstance.post("/login", userData)
        .catch((err) => console.log(err))

        dispatch(logInUser(userData))

        navigate("/meu-progresso")
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <div style={logInMenuStyle}>
      <Button
        aria-controls="login-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        style={{
            backgroundColor: theme.palette.rumoaoimeCustomColors.darkBlue
        }}
        disableRipple
      >
        Entrar
      </Button>

      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem onClick={login}>
          <ListItemIcon>
            <GoogleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Entrar com o Google</ListItemText>
        </MenuItem>      
      
      </Menu>
    </div>
  );
};

export default LogInButton;
