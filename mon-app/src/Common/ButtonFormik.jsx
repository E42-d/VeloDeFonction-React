import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: '45px', 
      backgroundColor: '#cf9f25',
      color: 'white', 
    },
  },
}));


export default function ButtonFormik({title}) {
  const classes = useStyles();
  const { handleSubmit } = useFormikContext();

  return (
  <div className={classes.root}>
    <Button variant="contained" onClick={handleSubmit}>{title}</Button>
  </div>
  )
};


