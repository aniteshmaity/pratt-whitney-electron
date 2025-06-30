import React from 'react'

const ReddropSvg = ({className}) => {
  return (
  //   <div className={className}>
  //     <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width="30"
  //   height="30"
  //   fill="none"
  //   viewBox="0 0 60 60"
  // >
  //   <g filter="url(#filter0_f_1073_3349)">
  //     <circle cx="30" cy="30" r="10" fill="#CE1126"></circle>
  //   </g>
  //   <circle cx="30" cy="30" r="10" fill="#CE1126"></circle>
  //   <circle
  //     cx="30"
  //     cy="30"
  //     r="17.5"
  //     stroke="#D91027"
  //     strokeOpacity="0.5"
  //   ></circle>
  //   <defs>
  //     <filter
  //       id="filter0_f_1073_3349"
  //       width="58.2"
  //       height="58.2"
  //       x="0.9"
  //       y="0.9"
  //       colorInterpolationFilters="sRGB"
  //       filterUnits="userSpaceOnUse"
  //     >
  //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
  //       <feBlend
  //         in="SourceGraphic"
  //         in2="BackgroundImageFix"
  //         result="shape"
  //       ></feBlend>
  //       <feGaussianBlur
  //         result="effect1_foregroundBlur_1073_3349"
  //         stdDeviation="9.55"
  //       ></feGaussianBlur>
  //     </filter>
  //   </defs>
  // </svg>
  //   </div>
      <div className={className}>
      <svg width={30} height={30} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="6.487" cy="7.139" rx="6.253" ry="6.25" fill="#e7e5e5"  />
        <ellipse cx="6.488" cy="7.139" rx="3.474" ry="3.472" fill="#D91027" />
      </svg>
    </div>
  )
}

export default ReddropSvg
