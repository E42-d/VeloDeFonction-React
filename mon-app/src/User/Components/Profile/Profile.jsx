import * as Yup from "yup";
import FormField from "../../../Common/FormField";
import EditIcon from "@material-ui/icons/Edit";
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
import { Button } from "@material-ui/core";


const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  immat: Yup.string()
});
const useStyles= makeStyles((theme) => ({
  profile:{
    display:"inline"
  },
  edit: {
    display: "inline",
   
  }
}));

export default function Profile() {

  const classes = useStyles();
  return (
    <div className="profile">
      <h2>MON PROFIL </h2>
      <p>Modification <Button><EditIcon /></Button></p>
      <FormFormik
        initialValues={{
          firstname: "",
          lastname: "",
          immat: "",
          password:""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <div>
        <FormField name="firstName" label="Prénom" value="Jean" /><span><Button><EditIcon /></Button></span>
        </div>
        <FormField name="lastName" label="Nom" value="Dupont" />
       
        <FormField name="immat" type="text" label="Numéro immat" value="12WZ1" />
       
        <FormField name="password" label="Mot de passe" value="*****" />
        
        
        <FormField name="KM domicile/travail" value="4" label="Distance domicile/travail" variant="filled" />
        <FormField name="coeff" label="Coeff de cotisation" value="20cents/km" variant="filled" />
        {/* mettre en props pour les calculs */}
        <ButtonFormik title="Enregistrer" />
      </FormFormik>
    </div>
  );
}
