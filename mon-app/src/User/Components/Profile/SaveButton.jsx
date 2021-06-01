import { useFormikContext } from "formik";
import {makeStyles} from '@material-ui/core';
import React from "react";

const useStyles= makeStyles((theme) => ({
  save:{
    backgroundColor: '#cf9f25',
    color: 'white', 
    border: 'none', 
    width: '140px', height: '45px',
    fontSize: '11px', 
    letterSpacing: '2.5px', 
    borderRadius: '45px', 
    textTransform: 'uppercase', 
  }
}));
const SubmitButton = ({ title }) => {
  const classes = useStyles();
  const { handleSubmit } = useFormikContext();
  return <button className={classes.save} onClick={handleSubmit}>{title}</button>;
};

export default SubmitButton;
