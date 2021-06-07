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
  pop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <KmUsers />
      <Kpi />
      <div className={classes.pop}>
        <PopupList />
      </div>
    </div>
  );
}

export default Dashboard;
