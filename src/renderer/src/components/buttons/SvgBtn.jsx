import * as React from "react";

const SvgBtn = ({ type = "default", height = "52px",
    width = "282px",backgroundColor= "#D91027", text ,textClass="",showArrow = false,}) => {
      // console.log("SvgBtn type:", type);

    return (
        <div className="relative  flex items-center justify-center cursor-pointer"    style={{ height, width }}>
            <div className="absolute flex items-center justify-center gap-3">
            <p className={`z-10 text-white ${textClass}`}>{text}</p>
            {showArrow && (<svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.02998 5L0.529984 0.669873V9.33013L8.02998 5Z"
                    fill="white"
                />
            </svg>)}
      
            </div>
            {type === "default" && (
              <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-full"
        fill="none"
        viewBox="0 0 282 52"
        preserveAspectRatio="none"
      >
        <path
          fill={backgroundColor}
          stroke="#A20000"
          strokeWidth="0.5"
          d="M280 .75H14.962a1.25 1.25 0 0 0-1 .501L.998 18.584a1.25 1.25 0 0 0-.249.749V50c0 .69.56 1.25 1.25 1.25h265.921c.404 0 .783-.195 1.017-.523l12.079-16.913c.152-.212.233-.467.233-.727V2c0-.69-.56-1.25-1.25-1.25Z"
        />
      </svg>
            )}
            {
              type ==="timeline-1" && (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full h-full"
                fill="none"
                viewBox="0 0 180 33"
                preserveAspectRatio="none"
              >
                <path
                  fill="#D91027"
                  stroke="#A20000"
                  strokeWidth="0.5"
                  d="M167.177 32.25c.593 0 1.162-.234 1.584-.652l9.823-9.741a2.25 2.25 0 0 0 .666-1.598V3A2.25 2.25 0 0 0 177 .75H12.824a2.25 2.25 0 0 0-1.585.652l-9.823 9.741a2.25 2.25 0 0 0-.666 1.598V30A2.25 2.25 0 0 0 3 32.25h164.177Z"
                ></path>
              </svg>
              )
            }
            

{type === "small" && (
  <svg
  xmlns="http://www.w3.org/2000/svg"
className="block w-full h-full"
  fill="none"
  viewBox="0 0 110 39"
       preserveAspectRatio="none"
>
  <path
  fill={backgroundColor}
    stroke="#A20000"
    strokeWidth="0.5"
    d="M108 .75H12.978a1.25 1.25 0 0 0-.936.421L1.064 13.57a1.25 1.25 0 0 0-.314.829V37c0 .69.56 1.25 1.25 1.25h95.77c.373 0 .726-.166.964-.454l10.23-12.378a1.25 1.25 0 0 0 .286-.796V2c0-.69-.56-1.25-1.25-1.25Z"
  ></path>
</svg>
)}

      
          
        </div>
    );
};

export default SvgBtn;

