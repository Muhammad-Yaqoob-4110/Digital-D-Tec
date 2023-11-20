import React from "react";
import doclinkedin from "../../Images/doclinkedin.png";
import docfacebook from "../../Images/docfacebook.png";
import docinstagram from "../../Images/docinstagram.png";
const DoctorCard = ({ doc }) => {
  return (
    <div className="w-80  rounded-sm mx-1 my-1">
      <img src={doc} alt="" srcset="" />
      <div className=" p-3 flex justify-center bg-registerCustom">
        <div className="w-1/2">
          <p className="font-work-sans text-base font-normal leading-6 text-custom">
            Doctor’s Name
          </p>
          <p className="font-work-sans text-base font-bold leading-5 tracking-wider text-custom uppercase">
            Neurology
          </p>
        </div>
      </div>
      <div className="p-3  flex justify-center bg-registerCustom">
        <div className=" w-1/2 flex justify-start">
          <img
            className="mx-1"
            src={doclinkedin}
            width="24px"
            height="24px"
            alt=""
            srcset=""
          />
          <img
            className="mx-1"
            src={docfacebook}
            width="24px"
            height="24px"
            alt=""
            srcset=""
          />
          <img
            className="mx-1"
            src={docinstagram}
            width="24px"
            height="24px"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="font-work-sans text-base font-normal leading-6 text-center bg-doctorsCustom p-3 cursor-pointer">
        View Profile
      </div>
    </div>
  );
};

export default DoctorCard;
