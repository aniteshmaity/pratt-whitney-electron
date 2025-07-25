import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import { resetYearState } from "../../features/yearSlice";
import { resetNavigation } from "../../features/navigationSlice";
import { useDispatch } from 'react-redux';
function BackHomeButtons({ onPrevious, onHome, containerClassName = "",  buttonPadding = "py-2" }) {
  const dispatch = useDispatch();
  return (
    <div className={`absolute grid grid-cols-2  z-40  ${containerClassName}`} style={{
      clipPath:
        "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
    }}>

      <div onClick={onPrevious} className={`bg-[#918F8F] text-white flex justify-center items-center px-3 ${buttonPadding} gap-1 cursor-pointer hover:bg-[#656363]`}>
        <BiSolidChevronLeft className="h-full w-[20px]" />
        <p className="text-[1rem] font-[500]">Previous</p>
      </div>


      <div onClick={() => {
        onHome();
        dispatch(resetYearState());
        dispatch(resetNavigation());
      }} className={`bg-[#CE2028] text-white flex justify-center items-center px-3 ${buttonPadding} gap-2 cursor-pointer hover:bg-red-800`}>
        <BiHomeAlt2 className="h-full w-[20px]" />
        <p className="text-[1rem] font-[500]">Home</p>
      </div>

    </div>

  )
}

export default BackHomeButtons