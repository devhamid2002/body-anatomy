import { IOnClick } from "../../types/onclick/OnClickType"

export default function Arm({ onClick }: IOnClick) {
  return (
    <div onClick={onClick}>
      {/* Shoulder Section */}
      <div
        className="w-28 h-64 mt-52 bg-seafoamGreen "
        style={{ borderRadius: "100% 0% 0% 4% / 100% 10% 10% 43%" }}></div>
      {/* Arm Section */}
      <div
        className="w-[120px] h-52 bg-seafoamGreen skew-y-6 -translate-y-4"
        style={{ borderRadius: "3% 11% 6% 4% / 99% 60% 27% 30% " }}></div>
    </div>
  );
}
