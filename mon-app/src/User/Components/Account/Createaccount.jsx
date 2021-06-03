import * as Yup from "yup";
import FormField from "../../../Common/FormField";
import EditIcon from "@material-ui/icons/Edit";
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ButtonFormik from "../../../Common/ButtonFormik";
import FormFormik from "../../../Common/FormFormik";
import Icon from '@material-ui/core/Icon';
import Popupaccount from "../Account/Popupaccount";

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

export default function Createaccount() {

  const classes = useStyles();
  return (
    <div className="profile">
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
        
        <FormField name="lastName" label="Nom" />

        <FormField name="firstName" label="Prénom" />
       
        <FormField name="immat" type="text" label="Numéro immat" />
       
        <FormField name="password" label="Mot de passe" endIcon={<EditIcon></EditIcon>}>******</FormField>
        
        
        <FormField name="KM domicile/travail" value="4" label="Distance domicile/travail" variant="filled" >3 KM</FormField>
        <FormField name="coeff" label="Coeff de cotisation" value="20cents/km" variant="filled" />
        {/* mettre en props pour les calculs */}
        <ButtonFormik title="Enregistrer" />
      </FormFormik>
    </div>
  );
}
