
import { makeStyles } from "@material-ui/core";
import React from "react";
import * as Yup from "yup";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
import ConnectField from "./ConnectField";
import PopupAccount from "../Account/PopupAccount";
//import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    connect: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop: "100px",
      },
      click: {
        marginTop: "10px",
        marginBottom: "15px",
      },
    }));

export default function Login(props) {
  const validationSchema = Yup.object().shape({
    Mail: Yup.string().required("Veuillez saisir votre adresse mail"),
    Password: Yup.string().required("Veuillez saisir votre mot de passe"),
  });

    const classes = useStyles();
    //const history = useHistory();

    /*const handleConnection = async () => {
      try {
        const token = await axios.post(
          //"",
          form
        );

    console.log(token.data);
    localStorage.setItem("userToken", token.data.access_token);
    const config = {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
          },
        };*/

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
        <ConnectField name="Password" type="password" placeholder="Password" />
        
        <ButtonFormik title="Connexion" /*onClick={handleConnection}*//>
        <PopupAccount />
      </FormFormik>
    </div>
  );
}


