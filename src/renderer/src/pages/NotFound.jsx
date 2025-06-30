
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo404 from '../assets/images/maps/man-with-404-error-logo.jpg'
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-lg text-center">
        {/* Icon or Illustration */}
        <div className="mb-6">
         <img src={Logo404} className="w-full" />
        </div>

        {/* Error Message */}

        <p className="text-lg text-gray-600 mb-6 font-objektiv font-[600]">
          We can't find the page you're looking for.
        </p>

        {/* Call-to-Action */}
        <button
          onClick={() => navigate("/home")}
    
          className="px-8 clipped-button-2  py-2   bg-[#D91027] text-white font-medium text-lg  shadow-lg hover:bg-[#4a1016] focus:ring focus:ring-blue-300 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
