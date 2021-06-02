import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Kpi from "./Kpi";
import Footer from "../../Main/Footer/Footer";

import KmUsers from "./KmUsers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <KmUsers />
      <Kpi />
      <Button variant="contained" color="primary">
        Liste pointage
      </Button>
      <Footer />
    </div>
  );
}

export default Dashboard;
