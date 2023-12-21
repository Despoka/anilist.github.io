import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="static bottom-0 left-0">
        <div className="bg-[#15141F] w-full justify-center items-center flex  h-auto ">
          <div className="py-10 grid-col items-center ">
            <img
              src="/assets/images/logo.svg"
              width={150}
              height={150}
              alt="assets circle left"
            />
            <p className="text-sm pt-1">
              © Copyright HotelHub. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
