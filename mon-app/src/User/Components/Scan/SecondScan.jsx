import React,{ useState } from 'react';
import QrReader from "react-qr-reader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom';

    

function SecondScan() {
    let history = useHistory();
    const [scanResultWebCam, setScanResultWebCam] = useState("")
    const [displayToast,SetDisplayToast] = useState(false)

    const handleErrorWebCam =(error) =>{
        console.log(error);
    }
    const handleScanWebCam =(result) =>{
        if (result){
            setScanResultWebCam(result);
            toast.success('👏 votre trajet à bien était enregistré', {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
SetDisplayToast(!displayToast);
console.log({scanResultWebCam})
        }
        history.push('/')
    }
    return (
        <div>
            <h2>Scanner le QR code affiché</h2>
            <QrReader
            delay={300}
            style={{with:"100%"}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
            style={{with:"100%",margin:"50px",}}
            />
           {displayToast &&  <ToastContainer/>}
        
        </div>
    );
}

export default SecondScan;