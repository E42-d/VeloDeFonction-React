import { makeStyles, TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
  }));

function ConnectField ({name, ...otherProps}) {
    const {
        setFieldTouched,
        setFieldValue,
        values,
        errors,
        touched
    } = useFormikContext();
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <TextField
        id="outlined-basic"
        //label=
        variant="outlined"
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        />
        {errors[name] && touched[name] && <p>{errors[name]}</p>}   
        </div>
    );
}

export default ConnectField;