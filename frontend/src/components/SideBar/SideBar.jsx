import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import sections from './sections';

const sidebarStyle = {
  position: 'fixed',
  top: '64px', // Adjust this value to match your topbar's height
  backgroundColor: 'white',
  width: '240px', // Adjust the width as needed
  height: 'calc(100vh - 64px)', // Calculate the remaining height
  borderRight: '2px solid #ccc',
  overflowY: 'auto', // Enable vertical scrolling if necessary
  color: "grey"
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <List>
        {
          sections.map((section) =>
            <>
              <ListItem style={{ marginBottom: '2px' }}>
                <Typography variant="caption">
                  {section.name}
                </Typography>
              </ListItem>

              {
                section.pages.map((page) =>                 
                  <ListItem button style={{ height: "40px"}}>
                    <ListItemIcon>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItem>
                )
              }
              
              <Divider style={{ marginBottom: "10px", marginTop: "10px"}}/>
            </>
          )
        }
      </List>
    </div>
  );
};

export default Sidebar;
