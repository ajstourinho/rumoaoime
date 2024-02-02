import React from 'react';
import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';

import { useNavigate, useLocation } from 'react-router-dom';

import sections from './sections';

import { styled } from "@mui/material/styles";

const ListItem = styled(MuiListItem)(({ selectedcolor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: selectedcolor,
    "& .MuiListItemIcon-root": {
      // This targets a ListItemIcon child
      color: "white",
    },
  },
}));

const sidebarStyle = {
  position: 'fixed',
  backgroundColor: 'white',
  width: '240px', // Adjust the width as needed
  height: 'calc(100vh - 106px)', // Calculate the remaining height
  borderRight: '2px solid #ccc',
  overflowY: 'auto', // Enable vertical scrolling if necessary
  color: "grey"
};

const Sidebar = () => {
  const { isLoggedIn } = useSelector(selectUser);
  
  const navigate = useNavigate();

  let location = useLocation();

  return (
    <div style={sidebarStyle}>
      <List sx={{ marginBottom: "20px" }}>
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            <ListItem style={{ marginBottom: "2px" }}>
              <Typography variant="overline">{section.name}</Typography>
            </ListItem>

            {section.pages.map((page, idx) => (
              <Tooltip
                key={idx}
                title={
                  page.name === "Meu progresso" && !isLoggedIn
                    ? "É preciso entrar com sua conta para ver o seu progresso."
                    : false
                }
                arrow
                placement="right-start"
                style={{ cursor: "pointer" }}
              >
                <span>
                  <ListItem
                    button
                    style={{ height: "35px" }}
                    disabled={
                      page.name === "Meu progresso" && !isLoggedIn
                        ? true
                        : false
                    }
                    onClick={() => navigate(page.navigateTo)}
                    selected={location.pathname.includes(page.navigateTo)}
                    selectedcolor={page.selectedColor}
                  >
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItem>
                </span>
              </Tooltip>
            ))}

            <Divider style={{ marginBottom: "10px", marginTop: "10px" }} />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
