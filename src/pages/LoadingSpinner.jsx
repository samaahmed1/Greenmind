import { PulseLoader } from "react-spinners";
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <PulseLoader color="#36d7b7" size={15} />
    </div>
  );
}
