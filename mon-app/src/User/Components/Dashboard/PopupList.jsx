import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#103f54",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "45px",
    backgroundColor: "#cf9f25",
    color: "white",
    width: "225px",
    height: "45px",
    "&:hover": {
      backgroundColor: "#103f54",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={handleClickOpen}
        className={classes.button}
      >
        Historique
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Button autoFocus color="inherit" onClick={handleClose}>
              Liste pointage
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="13/05/2021" secondary="3KM" />
            <DirectionsBikeIcon />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="14/05/2021" secondary="3KM" />
            <DirectionsBikeIcon />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
