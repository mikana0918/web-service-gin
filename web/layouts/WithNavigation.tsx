import * as React from 'react';
import Grid from "@mui/material/Grid";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './Navigation.module.scss';
import { useRouter } from "next/router";

export const DefaultBottomNavigation = () => {
  const [value, setValue] = React.useState(0)
  const router = useRouter();

  const onLink = (href: any) => {
    router.push(href);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        className={styles.navigationBottom}
      >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} onClick={() => onLink("/")}/>
          <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} onClick={() => onLink("/favorite")}/>
          <BottomNavigationAction label="Search" icon={<LocationOnIcon />} onClick={() => onLink("/search")}/>
      </BottomNavigation>
    </Grid>
  )
}