import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <ImSpinner8 className="w-12 h-12 text-neutral-500 animate-spin duration-1000 transition-all ease-in" />
    </div>
  );
};

export default Loading;
