import * as React from "react";

const BlurSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="715"
    height="785"
    fill="none"
    viewBox="0 0 715 785"
  >
    <g filter="url(#filter0_f_1053_1622)">
      <path
        fill="#fff"
        d="M-17 69h663s-35.423 333.994-169.775 481.103C334.755 705.005-17 716-17 716z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_f_1053_1622"
        width="799.2"
        height="783.2"
        x="-85.1"
        y="0.9"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_1053_1622"
          stdDeviation="34.05"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default BlurSvg;
