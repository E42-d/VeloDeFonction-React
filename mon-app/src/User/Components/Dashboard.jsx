import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Kpi from "./Kpi";

import KmUsers from "./KmUsers";
import PopupList from "./PopupList";

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
      <PopupList />
    </div>
  );
}

export default Dashboard;
