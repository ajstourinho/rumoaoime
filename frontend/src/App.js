import Grid from '@mui/material/Grid';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

import Links from "./Links";

function App() {

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

          <Grid item sx={{ mt: '64px', mb: "42px", p: "30px", maxHeight: 'calc(100vh - 108px)', overflowY: 'auto' }} xs>
            <Links />
          </Grid>
        </Grid>

      </Grid>
        
      <Footer />
    </>
  );
}

export default App;
