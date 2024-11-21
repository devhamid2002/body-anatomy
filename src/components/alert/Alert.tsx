import { TAlert } from "../../types/alert/AlertType";


export default function Alert({title}: TAlert) {
  return (
    <>
      <div
        className="fixed top-4 left-0 transform m-4 md:m-10 w-80 z-50 rounded-lg flex items-center p-4 mb-4 text-green-800 border-r-4 border-green-300 bg-green-50 shadow-lg"
        role="alert">
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
