import React from "react";
const AboutUsCard = ({ img, title, text1, text2 }) => {
  return (
    <div className="flex justify-center hover:cursor-pointer mx-1 my-3 border">
      <div className="flex flex-wrap justify-start">
        <div className="p-5 bg-aboutUsCustom transition duration-300 ease-in-out transform hover:scale-105">
          {/* Add transition and hover effect for a smoother experience */}
          <img width="40px" height="38px" src={img} alt="" />
          <div className="mt-3">
            <p className="text-left font-worksans text-base font-bold leading-5 tracking-normal text-custom uppercase">
              {title}
            </p>
            <p className="text-custom">{text1}</p>
            <p className="text-custom">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
