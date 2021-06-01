import { useState } from "react";
import * as Yup from "yup";
import Form from "./Form";
import FormField from "./FormField";
import SubmitButton from "./SaveButton";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  immat: Yup.string()
});

export default function Profile() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [immat, setImmat] = useState();
    const [pw, setPw] = useState();
    const[km, setKm]=useState();
  return (
    <div className="profile">
      <h2>MON PROFIL </h2>
      <Form
        initialValues={{
          firstname: "Jean",
          lastname: "Dupont",
          immat: "12A3"
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <FormField name="firstName" placeholder="Prénom" value={{firstname, setFirstname}} label="Prénom" variant="filled"/>
        <FormField name="lastName" placeholder="Nom" value={{lastname, setLastname}} label="Nom" variant="filled" />
        <FormField name="immat" placeholder="Numéro Immat" type="text" value={{immat, setImmat}} label="Numéro immat" />
        <FormField name="mdp" placeholder="Mot de passe" value={{pw, setPw}} label="Mot de passe" />
        <FormField name="KM domicile/travail" value="4" label="Distance domicile/travail">3 KM</FormField>
        <FormField name="coeff" label="Coeff de cotisation" value="20cents/km" />
        {/* en option mettre en props pour les calculs */}
        <SubmitButton title="Enregistrer" />
      </Form>
    </div>
  );
}
