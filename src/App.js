import React from 'react';
import NavBar from "./Components/NavBar";
import {Grid, Paper, Container} from "@material-ui/core";
import Image from "./Components/profile_pic.jpg";
import Profile from "./Components/Profile";
const styles = {
  gridContainer: {
    backgroundImage: `url(${Image})`,
  }
};
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Grid container>
        <Grid item sm >
          <Paper >
            <Profile />
          </Paper>
        </Grid>
        <Grid item sm>
          <h1> How are you?</h1>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
