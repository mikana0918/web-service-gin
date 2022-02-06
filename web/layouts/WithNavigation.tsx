import * as React from 'react';
import Grid from "@mui/material/Grid";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  topGrid: {
    position: 'fixed',
    top: 0,
    backgroundColor: 'white'
  },
  bottomGrid: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white'
  }
});

export const DefaultBottomNavigation = () => {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.bottomGrid}
    >
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Grid>
  )
}