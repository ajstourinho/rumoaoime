import Grid from '@mui/material/Grid';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

import Links from "./Links";
import { useTheme } from '@mui/material';


function App() {
  const theme = useTheme()

  const contentGridStyle = {
    position: 'fixed',
    marginLeft: theme.custom.sideBarWidth,
    marginTop: theme.custom.topBarHeight,
    width: `calc(100vw - ${theme.custom.sideBarWidth})`, // Adjust the width as needed
    height: `calc(100vh - ${theme.custom.footerAndTopBarHeight})`, // Calculate the remaining height
    overflowY: 'auto', // Enable vertical scrolling if necessary
    padding: "30px"
  };

  return (
    <>
      <Grid container>
        
        <Grid item xs={12}>
          <TopBar />
        </Grid>

        <Grid container>
          <Grid item sx={{mt: theme.custom.topBarHeight, width: theme.custom.sideBarWidth}}>
            <SideBar />
          </Grid>

          <Grid item style={contentGridStyle}>
            <Links />
          </Grid>
        </Grid>

      </Grid>
        
      <Footer />
    </>
  );
}

export default App;
