import Cheest from "../cheest/Cheest";
import LeftHand from "../left hand/LeftHand";
import RightHand from "../right hand/RightHand";

export default function Body() {
  return (
    <div className="flex justify-center items-start mx-auto gap-1 mt-20">
      <LeftHand />
      <Cheest />
      <RightHand />
    </div>
  );
}
