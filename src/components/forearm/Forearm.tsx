import { IOnClick } from "../../types/onclick/OnClickType";

export default function Forearm({ onClick }: IOnClick) {
  return (
    <div onClick={onClick}>
      {/* Elbow Section */}
      <div className="w-28 h-10  skew-y-6 bg-seafoamGreen rounded-b-2xl"></div>
      {/* Forearm Section */}
      <div
        className="w-32 h-52 bg-seafoamGreen skew-y-4 -translate-y-6 -translate-x-3"
        style={{ borderRadius: "27% 18% 12% 13% / 99% 53% 54% 30% " }}></div>
      <div
        className="w-[134px] absolute h-52 mt-2 bg-seafoamGreen -skew-y-12 -translate-y-28 -translate-x-4"
        style={{ borderRadius: "14% 12% 0% 0% / 100% 53% 54% 30%  " }}></div>
    </div>
  );
}
