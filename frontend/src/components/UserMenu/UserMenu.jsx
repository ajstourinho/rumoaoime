import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { logOutUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
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
    marginLeft: 'auto',
  };

  const userData = useSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate()
  
  const logout = () => {
    dispatch(logOutUser())
    navigate("/")
  }

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
          onClick={logout}
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
