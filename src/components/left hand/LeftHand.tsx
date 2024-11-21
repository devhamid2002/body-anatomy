import { useState } from "react";
import Arm from "../arm/Arm";
import Forearm from "../forearm/Forearm";
import Hand from "../hand/Hand";
import Alert from "../alert/Alert";

export default function LeftHand() {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };


  return (
    <div>
      {showAlert && (
        <Alert
          title={alertMessage}
        />
      )}
      <Arm onClick={() => handleClick("Left Shoulder and Arm")} />
      <Forearm onClick={() => handleClick("Left Forearm")} />
      <Hand onClick={() => handleClick("Left Hand")} />
    </div>
  );
}
