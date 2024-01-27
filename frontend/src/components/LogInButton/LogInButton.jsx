import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
// import GoogleLogin from "react-google-login"
// import { gapi } from 'gapi-script';

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
    marginLeft: 'auto', // Move to the right
  };

//   const responseGoogle = (response) => {
//     console.log(response);
//   }

//     useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId: "816971905092-8q3a80l1vd05aa939o969auac2d9f21m.apps.googleusercontent.com",
//         scope: 'email',
//       });
//     }

//     gapi.load('client:auth2', start);
//   }, []);

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
          <SettingsIcon style={{marginRight: "10px"}}/>
          Entrar com Google
          {/* <GoogleLogin
            clientId="816971905092-8q3a80l1vd05aa939o969auac2d9f21m.apps.googleusercontent.com"
            buttonText="Entre com Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          /> */}
        </MenuItem>

      </Menu>
    </div>
  );
};

export default LogInButton;
