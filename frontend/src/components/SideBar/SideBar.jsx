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
  backgroundColor: 'white',
  width: '240px', // Adjust the width as needed
  height: 'calc(100vh - 106px)', // Calculate the remaining height
  borderRight: '2px solid #ccc',
  overflowY: 'auto', // Enable vertical scrolling if necessary
  color: "grey"
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <List
        sx={{marginBottom: "20px"}}
      >
        {
          sections.map((section, idx) =>
            <React.Fragment key={idx}>
              <ListItem style={{ marginBottom: '2px' }}>
                <Typography variant="overline">
                  {section.name}
                </Typography>
              </ListItem>

              {
                section.pages.map((page, idx) =>                 
                  <ListItem button style={{ height: "35px"}} key={idx}>
                    <ListItemIcon>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItem>
                )
              }
              
              <Divider style={{ marginBottom: "10px", marginTop: "10px"}}/>
            </React.Fragment>
          )
        }
      </List>
    </div>
  );
};

export default Sidebar;
