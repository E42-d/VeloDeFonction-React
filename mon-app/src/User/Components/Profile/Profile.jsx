import * as Yup from "yup";
import FormField from "../../../Common/FormField";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  immat: Yup.string(),
});
const useStyles = makeStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginBottom: "70px",
    width: "100%",
  },
}));

export default function Profile() {
  const classes = useStyles();

  const description = {
    lastname: "Dino",
    firstname: "Toto",
    numberImmat: "1201212",
    password: "secret123",
    km: "6km",
    coeff: "20cent/km",
  };

  return (
    <div className={classes.profile}>
      <h2>MON PROFIL </h2>

      <FormFormik
        initialValues={{
          firstname: "",
          lastname: "",
          immat: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <FormField
          name="firstName"
          label="Prénom"
          value={description.firstname}
        />

        <FormField name="lastName" label="Nom" value={description.lastname} />

        <FormField
          name="immat"
          type="text"
          label="Numéro immat"
          value={description.numberImmat}
        />

        <FormField
          name="password"
          label="Mot de passe"
          value={description.password}
        />

        <FormField
          name="KM domicile/travail"
          value={description.km}
          label="Distance domicile/travail"
          variant="filled"
        />
        <FormField
          name="coeff"
          label="Coeff de cotisation"
          value={description.coeff}
          variant="filled"
        />
        <ButtonFormik title="Enregistrer" />
      </FormFormik>
    </div>
  );
}
