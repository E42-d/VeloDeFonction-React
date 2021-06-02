
import { makeStyles } from "@material-ui/core";
import React from "react";
import * as Yup from "yup";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
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
      <FormFormik
        initialValues={{
          Mail: "",
          Password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <ConnectField name="Mail" placeholder="Mail" />
        <ConnectField name="Password" placeholder="Password" />
        
        <ButtonFormik title="Connexion" />
        <ButtonFormik title="Créer un compte" />
      </FormFormik>
    </div>
  );
}

export default Login;
