import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';

import UserMenu from "../UserMenu/UserMenu";
import LogInButton from "../LogInButton/LogInButton";

import logoImage from '../../assets/images/logo/logo.png';

const TopBar = () => {
  const { isLoggedIn } = useSelector(selectUser)

  return (
    <AppBar
      position="fixed"
      style={{ left: 0, right: 0, top: 0, background: 'white', boxShadow: 'none' }}
    >
      <Toolbar style={{ height: '64px', borderBottom: '2px solid #ccc', color: "grey"}}>
        <img src={logoImage} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />

        <Typography variant="caption" style={{ marginLeft: '30px', cursor: 'pointer'}}>
          Sobre o IME
        </Typography>
        
        <Typography variant="caption" style={{ marginLeft: '30px', cursor: 'pointer' }}>
          Sobre o site
        </Typography>

        {
          isLoggedIn ?
          <UserMenu username="Alexandre" />
          :
          <LogInButton />
        }
      
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
