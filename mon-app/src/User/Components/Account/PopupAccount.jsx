import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import * as Yup from "yup";
import FormField from "../../../Common/FormField";
import InfoIcon from "@material-ui/icons/Info";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import Infos from "./Infos";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  immat: Yup.string(),
});

const useStyles = makeStyles((theme) => ({
  createaccount: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginBottom: "70px",
    width: "100%",
  },
  modif2: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  dialogue2: {
    height: "700px",
    width: "500px",
  },
  profil: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ok: {
    marginTop: "15px",
    marginLeft: "35px",
  },
  compte: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  bouton: {
    borderRadius: "45px",
    backgroundColor: "#cf9f25",
    color: "white",
    width: "225px",
    height: "45px",
    border: "none",
    "&:hover": {
      backgroundColor: "#103f54",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupAccount() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*const handleClick = () => {
    setOpen(true);
  };*/

  return (
    <div className={classes.createaccount}>
      <div className={classes.compte}>
        <button className={classes.bouton} onClick={handleClickOpen}>
          CRÉER UN COMPTE
        </button>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.modif2}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          CRÉER VOTRE COMPTE
        </h2>

        <div className={classes.profil}>
          <FormFormik
            initialValues={{
              firstname: "",
              lastname: "",
              mail: "",
              password: "",
              immat: "",
              entreprise: "",
              kilometre: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            <FormField name="firstName" label="Prénom" value="" />
            <FormField name="lastName" label="Nom" value="" />
            <FormField name="mail" type="text" label="Mail" value="" />
            <FormField name="password" label="Mot de passe" value="" />
            <FormField name="immat" type="text" label="Numéro immat" value="" />
            <FormControl>
              <InputLabel id="demo-simple-select-label"> Entreprise</InputLabel>
              <Select
                style={{ width: "270px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="primary"
                //value={}
                name="entreprise"
                //onChange={handleChange}
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"WCS"}>Wild Code School</MenuItem>
              </Select>
            </FormControl>
            <FormField
              name="kilomètre"
              label="Distance domicile/travail"
              value=""
            />
            <Infos />

            <div className={classes.ok}>
              <ButtonFormik title="Validez" />
            </div>
          </FormFormik>
        </div>
      </Dialog>
    </div>
  );
}
