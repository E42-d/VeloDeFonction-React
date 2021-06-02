import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Kpi from "./Kpi";
import KmUsers from "./KmUsers";
import PopupList from "./PopupList";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    marginBottom: "120px",
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <KmUsers />
      <Kpi />
      <PopupList />
    </div>
  );
}

export default Dashboard;
