import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PersonIcon from "@material-ui/icons/Person";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
  },
  container: {
    width: "100%",
    position: "fixed",
    bottom: "0",
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.container}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Photo" icon={<PhotoCameraIcon />} />
        <BottomNavigationAction label="Profil" icon={<PersonIcon />} />
        <BottomNavigationAction label="Tableau" icon={<DirectionsBikeIcon />} />
        <BottomNavigationAction label="Maintenance" icon={<BuildIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;
