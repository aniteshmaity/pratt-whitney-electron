import React from 'react'

const RedDotLineSvg = ({width,height,className,style}) => {
  return (
<div className={className} style={style}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 140 177"
  >
    <path stroke="#D91027" d="m29.71 148.36 56.5-123.5h53.5"></path>
    <path
      stroke="#D91027"
      strokeWidth="5"
      d="m69.499 65.5 18-38 23-.001"
    ></path>
    <circle
      cx="30.08"
      cy="147"
      r="17.5"
      stroke="#D91027"
      strokeOpacity="0.5"
    ></circle>
    <circle cx="30.08" cy="147" r="10" fill="#CE1126"></circle>
    <g filter="url(#filter0_f_2932_6583)">
      <circle cx="30.08" cy="147" r="10" fill="#CE1126"></circle>
    </g>
    <defs>
      <filter
        id="filter0_f_2932_6583"
        width="58.2"
        height="58.2"
        x="0.98"
        y="117.9"
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
          result="effect1_foregroundBlur_2932_6583"
          stdDeviation="9.55"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>

{/* <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 144 217"
  >
    <path stroke="#D91027" d="M31.586 182.719 95 34l48.586-16.28"></path>
    <path stroke="#D91027" strokeWidth="5" d="M79.5 77 97 36l19-6.5"></path>
    <circle
      cx="30"
      cy="187"
      r="17.5"
      stroke="#D91027"
      strokeOpacity="0.5"
    ></circle>
    <circle cx="30" cy="187" r="10" fill="#CE1126"></circle>
    <g filter="url(#filter0_f_1028_1088)">
      <circle cx="30" cy="187" r="10" fill="#CE1126"></circle>
    </g>
    <defs>
      <filter
        id="filter0_f_1028_1088"
        width="58.2"
        height="58.2"
        x="0.9"
        y="157.9"
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
          result="effect1_foregroundBlur_1028_1088"
          stdDeviation="9.55"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg> */}
</div>
  )
}

export default RedDotLineSvg