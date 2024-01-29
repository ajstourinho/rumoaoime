import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';

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

  const userData = useSelector(selectUser);

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
        {/* <Avatar style={{ width: '30px', height: '30px', marginRight: '8px' }}>{userData.username}</Avatar> */}
        <Avatar
          alt="Account Image"
          src={userData.pictureUrl}
          style={{ width: '30px', height: '30px', marginRight: '8px' }}
        />
        <Typography variant="body2">{userData.username}</Typography>
        <ExpandMoreIcon />
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem
          sx={{ width: "200px"}}
        >
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>   
      </Menu>
    </div>
  );
};

export default UserMenu;
