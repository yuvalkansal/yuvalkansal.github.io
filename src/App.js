import React from 'react';
import NavBar from "./Components/NavBar";
import {Grid, Paper} from "@material-ui/core";
//import Image from "./Components/profile_pic.jpg"
//import Movie from './movie.mp4'
import Profile from "./Components/Profile";
import Introduction from "./Components/Introduction";
import Achievements from "./Components/Achievements";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Mail from "./Components/Mail";

const theme = createMuiTheme({
        palette: {
            type: 'dark',
        }
    }
)

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Paper>
            <Grid container direction="column">
                <NavBar />
                <Grid container>
                <Grid container >
                    <Grid item sm>
                        <Profile />
                    </Grid>
                    <Grid item sm>
                        <Introduction />
                    </Grid>
                    <Grid item sm={12}>
                        <Achievements/>
                    </Grid>
                </Grid>
                </Grid>
                {/*to build under the photo and profile*/}

            </Grid>
        <Mail />
        </Paper>
    </ThemeProvider>

  );
}

export default App;
