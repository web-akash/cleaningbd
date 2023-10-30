import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export function SampleNextArrow(props) {
  return (
    <div
      className={`absolute z-40  ${
        props.centerArrow
          ? "right-3 top-1/2  -translate-y-1/2 bg-black opacity-25 rounded-full"
          : "left-1/2  -translate-x-1/2 top-full  bg-transparent "
      }  w-10 h-10 transition-all opacity-50 hover:opacity-70 rounded-full flex justify-center items-center cursor-pointer `}
      onClick={props.onClick}
    >
      <AiFillCaretRight className="text-2xl text-white" />
    </div>
  );
}

export function SamplePrevArrow(props) {
  return (
    <div
      className={`absolute z-40  ${
        props.centerArrow
          ? "left-3 top-1/2  -translate-y-1/2 bg-black opacity-40 rounded-full"
          : "right-1/2 -translate-x-1/2  top-full  bg-transparent  "
      }  w-10 h-10 transition-all opacity-50 hover:opacity-70 rounded-full flex justify-center items-center cursor-pointer `}
      onClick={props.onClick}
    >
      <AiFillCaretLeft className="text-2xl text-white" />
    </div>
  );
}
