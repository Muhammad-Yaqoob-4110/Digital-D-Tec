import React from "react";
import doc1 from "../Images/doctor1.png";
import doc2 from "../Images/doctor2.png";
import doc3 from "../Images/doctor3.png";
import DoctorCard from "./common/doctorCard";
const OurDoctors = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center mb-5">
        <div className="w-2/3">
          <p className="font-work-sans text-base font-normal leading-6 text-custom">
            Home / Doctors
          </p>
          <p className="font-yeseva-one text-4xl font-normal leading-9 text-custom">
            Our Doctors
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap">
        <DoctorCard doc={doc1} />
        <DoctorCard doc={doc2} />
        <DoctorCard doc={doc3} />
      </div>
      <div className="flex justify-center flex-wrap">
        <DoctorCard doc={doc1} />
        <DoctorCard doc={doc2} />
        <DoctorCard doc={doc3} />
      </div>
    </div>
  );
};

export default OurDoctors;
