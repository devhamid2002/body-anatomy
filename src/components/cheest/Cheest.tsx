import { useState } from "react";
import Alert from "../alert/Alert";

export default function Cheest() {
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
      <div onClick={() => handleClick("Chest !")}>
        <div className="bg-white h-64 w-96 mx-auto mt-44 relative overflow-visible">
          <div className="bg-seafoamGreen h-64 w-96 relative overflow-visible">
            <div className="absolute bg-white h-10 w-20 left-0 top-0 rounded-br-[99%] rounded-tb-[99%]"></div>
            <div className="absolute bg-white h-10 w-20 right-0 top-0 rounded-bl-[99%] rounded-tb-[99%]"></div>
            <div className="border-t-4 border-r-4 border-darkseafoamGreen absolute h-10 rounded-tr-[99%] w-28 mt-16 ml-16 -rotate-6"></div>
            <div className="border-t-4 border-l-4 border-darkseafoamGreen absolute right-0 h-10 rounded-tl-[99%] w-28 mt-16 mr-16 rotate-6"></div>

            <div className="absolute bg-seafoamGreen h-20 w-1/2 bottom-0 right-0 rounded-br-[99%] rounded-bl-[30%] translate-y-14">
              <div className="absolute border-b-4 border-r-4 border-darkseafoamGreen h-20 w-36 mb-1 mr-3 bottom-0 right-0 rounded-br-[99%] rounded-bl-[20%] rotate-6">
                <div
                  className="absolute left-1/2 mt-8 transform  border-4 border-darkseafoamGreen rounded-[50%/50%] w-5 h-8 "
                  style={{ transform: "rotate(-120deg)" }}></div>
              </div>
            </div>
            <div className="absolute bg-seafoamGreen h-20 w-1/2 bottom-0 left-0 rounded-br-[30%] rounded-bl-[99%] translate-y-14">
              <div className="absolute border-b-4 border-l-4 border-darkseafoamGreen h-20 w-36 mb-1 ml-3 bottom-0 left-0 rounded-bl-[99%] rounded-br-[20%] -rotate-6">
                <div
                  className="absolute right-1/2 mt-8 transform border-4 border-darkseafoamGreen rounded-[50%/50%] w-5 h-8"
                  style={{ transform: "rotate(120deg)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
