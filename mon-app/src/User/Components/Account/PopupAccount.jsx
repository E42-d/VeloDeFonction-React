import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import * as Yup from "yup";
import FormField from "../../../Common/FormField";

import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  immat: Yup.string()
});

const useStyles = makeStyles((theme) => ({
  createaccount:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginBottom: "70px",
    width: "100%",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  profil:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    //alignItems: "center",
    marginBottom: "70px",
    marginLeft: "25px",
    //width: "100%",
  },
  ok:{
    marginTop:"15px",
    marginLeft:"35px",
  },
  compte: {
    display:"flex",
    justifyContent:"center",
    marginTop:"20px",
  },
  bouton: {
    borderRadius: '45px', 
    backgroundColor: '#cf9f25',
    color: 'white',
    width: '225px',
    height: '45px',
    border: "none",
    "&:hover": {
      backgroundColor: '#103f54'
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
              Créer un compte
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.profil}>
        <FormFormik
        initialValues={{
          firstname: "",
          lastname: "",
          mail: "",
          password:"",
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
       
        <FormControl styles={{minWidth:"30ch"}} >
       
              <InputLabel 
              styles={{width:"125ch"}}
              id="demo-simple-select-label">
                Entreprise
              </InputLabel>
             
              <Select
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
           
        <FormField name="kilomètre" label="Distance domicile/travail" value="" />
        <div className={classes.ok}>
        <ButtonFormik title="Validez" />
        </div>
      </FormFormik>
      </div>
      </Dialog>
    </div>
  );
}
