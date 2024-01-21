import React from 'react';

import Typography from '@mui/material/Typography';

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  background: 'white',
  color: '#888',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  borderTop: '2px solid #ccc', // Add an upper border
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
        <Typography variant="caption">
            &copy; Rumo ao IME 2024 - Todos os direitos reservados.
        </Typography>
    </footer>
  );
};

export default Footer;
