import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function SecondScan() {
  const history = useHistory();
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [displayToast, SetDisplayToast] = useState(false);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {

    if (result === "hello") {
      setScanResultWebCam(result);
      toast.success("👏 Votre trajet a bien été enregistré", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/dashboard");
      SetDisplayToast(!displayToast);
      console.log({ scanResultWebCam });
    } else if(result !== null) {
      toast.error("❌ Ce QRCode n'est pas valide", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <h2>Scanner le QR code affiché</h2>
      <QrReader
        delay={300}
        style={{ with: "100%", margin: "50px" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
      {displayToast && <ToastContainer />}
    </div>
  );
}

export default SecondScan;
