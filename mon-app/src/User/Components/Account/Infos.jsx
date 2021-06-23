import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

function Infos(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <InfoIcon />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pour calculer votre trajet domicile/travail, Veuillez vous rendre
            sur googleMap afin de créer votre itinéraire.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Infos;
