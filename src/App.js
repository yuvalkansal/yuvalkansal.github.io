import React from 'react';
import NavBar from "./Components/NavBar";
import {Grid} from "@material-ui/core";
// import Image from "./Components/profile_pic.jpg";
import Profile from "./Components/Profile";
import Introduction from "./Components/Introduction";
import Achievements from "./Components/Achievements";
// const styles = {
//   gridContainer: {
//     backgroundImage: `url(${Image})`,
//   }
// };
function App() {
  return (
    <Grid container direction="column">
      <NavBar />
        <Grid container>
            <Grid item sm={12}>
                <Achievements/>
            </Grid>
        </Grid>
      <Grid container >
        <Grid item sm = {6} >
    <Profile />
        </Grid>
        <Grid item sm = {6}>
            <Introduction />
        </Grid>
      </Grid>
        {/*to build under the photo and profile*/}

    </Grid>

  );
}

export default App;
