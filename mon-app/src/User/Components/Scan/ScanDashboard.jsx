import React, { useState } from 'react';
import Scanne from './Scanne';
import SecondScan from './SecondScan';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ScanDashboard() {
    const [displayScan, setDisplayScan] = useState(true)
    const [displayToast,SetDisplayToast] = useState(false)
    const handlescan = ()=>{
        setDisplayScan(!displayScan)
        toast.success('👏 votre vélo à bien était enregistré', {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            SetDisplayToast(!displayToast)

    }
  

    return (
        <div>
          {displayScan && <Scanne onScan={handlescan}/>}
          {displayToast &&<ToastContainer/>}
           {!displayScan && 
 <SecondScan/> }
        </div>
    );
}

export default ScanDashboard;