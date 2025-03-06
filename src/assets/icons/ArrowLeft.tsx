import { SVGProps } from "react";

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
      ></path>
    </svg>
  );
}
