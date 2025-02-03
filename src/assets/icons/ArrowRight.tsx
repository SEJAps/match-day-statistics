import { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      ></path>
    </svg>
  )
}