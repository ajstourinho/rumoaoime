import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';

import sections from './sections';

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
                title={
                  page.name === "Meu progresso" && !isLoggedIn ?
                  "É preciso entrar com sua conta para ver o seu progresso."
                  : false
                }
                arrow placement="right-start" style={{cursor: "pointer"}}
              >
                <span>
                  <ListItem
                    button
                    style={{ height: "35px" }}
                    key={idx}
                    disabled={
                      page.name === "Meu progresso" && !isLoggedIn ? true : false
                    }
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
