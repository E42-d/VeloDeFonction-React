import React,{ useState } from 'react';
import QrReader from "react-qr-reader";



function Scanne({onScan}) {
    const [scanResultWebCam, setScanResultWebCam] = useState("")

    const handleErrorWebCam =(error) =>{
        console.log(error);
    }
    const handleScanWebCam =(result) =>{
        
        if (result){
            setScanResultWebCam(result);
            onScan()
        console.log(scanResultWebCam)
        }
    }
    
    return (
        <div>
            <h2>Veuillez scanner votre vélo</h2>
          
            <QrReader
            delay={300}
            style={{with:"100%", margin:"50px"}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
            
            />
            
        </div>
    );
}

export default Scanne;