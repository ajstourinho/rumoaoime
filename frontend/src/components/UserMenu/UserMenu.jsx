import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';

const UserMenu = ({ username }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Move to the right
  };

  return (
    <div style={userMenuStyle}>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          padding: '0',
          cursor: 'pointer',
          backgroundColor: 'transparent', // Remove background change on hover
          color: 'inherit', // Preserve text color
        }}
        disableRipple
      >
        <Avatar style={{ width: '30px', height: '30px', marginRight: '8px' }}>{username.charAt(0)}</Avatar>
        <Typography variant="subtitle1">{username}</Typography>
        <ExpandMoreIcon />
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <SettingsIcon style={{marginRight: "10px"}}/>
          Gerenciar conta
        </MenuItem>
        <MenuItem>
          <ExitToAppIcon style={{marginRight: "10px"}}/>
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
