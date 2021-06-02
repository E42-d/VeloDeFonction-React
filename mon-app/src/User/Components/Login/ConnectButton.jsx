import { Button} from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';


function ConnectButton({title}) {
    
    const { handleSubmit } = useFormikContext();
    return (
        <Button variant="contained" onClick={handleSubmit}>{title}</Button>    
    );
}

export default ConnectButton;