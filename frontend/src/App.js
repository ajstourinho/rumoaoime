import Grid from '@mui/material/Grid';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

import Links from "./Links";

function App() {

  const contentGridStyle = {
    position: 'fixed',
    marginLeft: "242px",
    marginTop: "64px",
    width: 'calc(100vw - 242px)', // Adjust the width as needed
    height: 'calc(100vh - 106px)', // Calculate the remaining height
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
          <Grid item sx={{mt: "64px", width: "240px"}}>
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
