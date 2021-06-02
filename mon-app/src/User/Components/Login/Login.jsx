
import { makeStyles } from "@material-ui/core";
import React from "react";
import * as Yup from "yup";
import ConnectButton from "./ConnectButton";
import Connected from "./Connected";
import ConnectField from "./ConnectField";

const useStyles = makeStyles((theme) => ({
    connect: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop: "150px",
      },
      click: {
        marginTop: "10px",
        marginBottom: "15px",
      },
    }));

const validationSchema = Yup.object().shape({
  Mail: Yup.string().required("Veuillez saisir votre adresse mail"),
  Password: Yup.string().required("Veuillez saisir votre mot de passe"),
});


function Login(props) {
    const classes = useStyles();
  return (
    <div className={classes.connect}>
      <Connected
        initialValues={{
          Mail: "",
          Password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <ConnectField name="Mail" placeholder="Mail" />
        <ConnectField name="Password" placeholder="Password" />
        <div className={classes.click}>
        <ConnectButton style={{width: '350px'}} title="Connexion" />
        </div>
        <ConnectButton title="Créer un compte" />
      </Connected>
    </div>
  );
}

export default Login;
