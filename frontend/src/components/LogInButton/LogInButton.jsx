import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

// Import for custom button
import { useGoogleLogin } from '@react-oauth/google';
// Get data from access_token
import axios from "axios";

const LogInButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logInMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  };


  // Login for custom button
  const login = useGoogleLogin({
    // onSuccess: tokenResponse => console.log(tokenResponse), // Line of code for default button
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
        console.log(res);
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
            backgroundColor: "rgb(14, 49, 135)"
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
        <MenuItem>

          <GoogleLogin
            onSuccess={credentialResponse => {
              const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />

        </MenuItem>
        
        <MenuItem>
          {/* Custom button */}
          <Button onClick={() => login()}>Sign in with Google 🚀</Button>
        </MenuItem>
      
      </Menu>
    </div>
  );
};

export default LogInButton;
