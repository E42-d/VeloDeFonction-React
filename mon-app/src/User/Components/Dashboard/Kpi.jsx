import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EcoIcon from "@material-ui/icons/Eco";
import EuroIcon from "@material-ui/icons/Euro";
import EventIcon from "@material-ui/icons/Event";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: "10px 10px 10px 10px",
    margin: "14px 14px 14px 14px",
    boxShadow: " 2px 2px 2px 1px rgb(167,207,58,0.5)",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
});

function Kpi() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              50km
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <TrendingUpIcon />
              Kilomètres cumulés sur l'année
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              15km
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <EventIcon />
              Kilomètres cumulés sur le mois
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              22 gCO2e/km
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <EcoIcon style={{ color: "#a7cf3a" }} />
              Impact CO2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              154€
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <EuroIcon />
              Indemnités
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Kpi;
