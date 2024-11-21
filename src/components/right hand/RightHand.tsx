import { useState } from "react";
import Arm from "../arm/Arm";
import Forearm from "../forearm/Forearm";
import Hand from "../hand/Hand";
import Alert from "../alert/Alert";

export default function RightHand() {
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
    <>
      {showAlert && <Alert title={alertMessage} />}
      <div className="transform scale-x-[-1]">
        <Arm onClick={() => handleClick("Right Shoulder and Arm")} />
        <Forearm onClick={() => handleClick("Right Forearm")} />
        <Hand onClick={() => handleClick("Right Hand")} />
      </div>
    </>
  );
}
