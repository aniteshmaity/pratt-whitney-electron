import React from 'react'
import Close from "../../assets/images/close_arrow.svg";
export const CloseBtn = () => {
    return (
        <div
            id="app_close"
            className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
        >
            <img src={Close} alt="close_arrow" />
        </div>
    )
}

