import React from "react";
import iPhoneLeft from "../../../assets/images/iPhoneLeft-Prop.png";
import iPhoneRight from "../../../assets/images/iPhoneRight-Prop.png";

const Iphone = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center cursor-pointer ">
        <div className="text-center">
          <h1 className="text-6xl font-semibold">iPhone 14</h1>
          <p className="text-xl font-normal">Big and bigger</p>
          <div className="space-x-10 text-blue-600 text-xl font-normal">
            <a href="/" className="hover:underline">
              Learn more {""}
            </a>
            {">"}
            <a href="/" className="hover:underline">
              Buy {""}
            </a>
            {">"}
          </div>
        </div>
        <div className="flex">
          <img src={iPhoneLeft} alt="iPad" className="w-1/2 object-cover" />
          <img src={iPhoneRight} alt="iPad" className="w-1/2 object-cover" />
        </div>
      </div>
    </>
  );
};

export default Iphone;
