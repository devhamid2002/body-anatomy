import { IOnClick } from "../../types/onclick/OnClickType";

export default function Hand({ onClick }: IOnClick) {
  return (
    <div onClick={onClick} className="mt-28 -translate-x-4">
      {/* hand Section */}
      <div className="w-[140px] h-14 mt-2 bg-seafoamGreen -skew-y-12  rounded-b-xl"></div>
      <div
        className="w-[158px] h-56 bg-seafoamGreen -rotate-6 -translate-y-6 translate-x-1"
        style={{ borderRadius: "8% 18% 24% 0% / 100% 53% 54% 33% " }}></div>
      <div className="relative -translate-y-6">
        {/* Thumb */}
        <div
          className="absolute mb-6 right-0 w-10 h-36 bg-seafoamGreen mr-1 -translate-y-14 translate-x-2"
          style={{
            borderRadius: "0% 0% 16% 79% / 0% 55% 15% 100%  ",
          }}></div>
        {/* Joints */}
        <div className=" absolute w-20 h-14 right-0  bg-seafoamGreen rounded-br-[99%] rounded-tb-[99%] rotate-[90deg] -translate-y-12"></div>
        {/* Joints */}
        <div className="absolute w-16 h-16 ml-12  bg-seafoamGreen rounded-br-[99%] rounded-tb-[99%] rotate-[-30deg] "></div>
        {/* Index Finger */}
        <div
          className="w-12 h-48 bg-seafoamGreen -rotate-[20deg]  relative translate-x-12 -translate-y-2"
          style={{ borderRadius: "0% 0% 100% 30% / 100% 0% 100% 33%" }}>
          {/* Middle Finger */}
          <div
            className="absolute bottom-0 mb-6 ml-5 w-10 h-56 bg-seafoamGreen"
            style={{
              borderRadius: "50% 0% 100% 30% / 100% 0% 100% 33%",
            }}></div>
        </div>
      </div>
    </div>
  );
}
