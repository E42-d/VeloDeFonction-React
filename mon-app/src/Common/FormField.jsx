import { useFormikContext } from "formik";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function FormField ({ name, ...otherProps }) {
  const classes = useStyles();
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched
  } = useFormikContext();

  return (
    <>
     <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <br />
      {errors[name] && touched[name] && <p>{errors[name]}</p>}
      </form>
    </>
  );
};
