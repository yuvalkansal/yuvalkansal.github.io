import React from 'react';
import NavBar from "./Components/NavBar";
import {Grid} from "@material-ui/core";
// import Image from "./Components/profile_pic.jpg";
import Profile from "./Components/Profile";
import Activities from "./Components/Activities";
// const styles = {
//   gridContainer: {
//     backgroundImage: `url(${Image})`,
//   }
// };
function App() {
  return (
    <Grid container direction="column">
      <NavBar />
      <Grid container >
        <Grid item sm = {6} >
    <Profile />
        </Grid>
        <Grid item sm = {6}>
            <Activities />
        </Grid>
      </Grid>
    </Grid>

  );
}

export default App;
