import { SVGProps } from "react";

/**
 * Kardelen (Snowdrop) monogram mark.
 * A stylised snowdrop flower inside a thin serif circle.
 */
export default function Logo({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="29.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.65"
      />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Stem */}
      <path
        d="M32 46 L32 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M32 40 C 26 38, 23 34, 24 30 C 28 31, 31 34, 32 40 Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Snowdrop petals */}
      <path
        d="M32 14 C 27 16, 25 22, 28 26 C 30 27, 34 27, 36 26 C 39 22, 37 16, 32 14 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M32 18 C 30 20, 29 23, 30.5 25 C 32 25.6, 34 25.2, 33.5 22.5 C 33.2 20.5, 32.8 19, 32 18 Z"
        fill="#FAF6EF"
        opacity="0.8"
      />
    </svg>
  );
}
