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
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const kpi = {
  annualKm: 50,
  monthKm: 15,
  co2: " 22 gCO2e/km",
  indemnite: "154€",
};

function Kpi() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {kpi.annualKm}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              <TrendingUpIcon style={{ color: "red" }} />
              Kilomètres cumulés sur l'année
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {kpi.monthKm}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              <EventIcon style={{ color: "blue" }} />
              Kilomètres cumulés sur le mois
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {kpi.co2}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              <EcoIcon style={{ color: "#a7cf3a" }} />
              Impact CO2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {kpi.indemnite}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              <EuroIcon style={{ color: "#cf9f25" }} />
              Indemnités
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Kpi;
