import { SVGProps } from "react";
import { removeStatsByMatchActive } from "../../utils";
import { useNavigate } from "react-router";

export function TrashStats(props: SVGProps<SVGSVGElement>) {
  const goTo = useNavigate();
  const handlerClearStats = () => {
    removeStatsByMatchActive();
    goTo("/inicio");
  };
  return (
    <svg
      onClick={handlerClearStats}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="2em"
      height="2em"
      {...props}
    >
      <defs>
        <path
          id="famiconsTrashBinSharp0"
          fill="none"
          d="M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56z"
        ></path>
      </defs>
      <use href="#famiconsTrashBinSharp0"></use>
      <use href="#famiconsTrashBinSharp0"></use>
      <path
        fill="white"
        d="m64 160l29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46l-56-56l-56 56L174.54 352l56-56l-56-56L200 214.54l56 56l56-56L337.46 240l-56 56l56 56Z"
      ></path>
      <rect
        width="448"
        height="80"
        x="32"
        y="48"
        fill="rgba(255,0,0,0.8)"
        rx="12"
        ry="12"
      ></rect>
    </svg>
  );
}
