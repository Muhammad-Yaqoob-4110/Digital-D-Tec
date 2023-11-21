import React from "react";
import call from "../Images/call.png";
import location from "../Images/location.png";
import email from "../Images/email.png";
import workingHours from "../Images/workingHours.png";
import AboutUsCard from "./common/aboutUsCard";
const AboutUs = () => {
  return (
    <div className="bg-white text-articles">
      <p className="text-center font-worksans text-caption text-18 font-bold leading-21 tracking-wider">
        Get in touch
      </p>
      <p className="text-center font-yesevaone text-display2 lg:text-3xl text-xl font-bold leading-37 tracking-normal text-custom">
        Contact
      </p>
      <div className="flex justify-center flex-wrap">
        <AboutUsCard
          img={call}
          title="Emergency"
          text1="(237) 681-812-255"
          text2="(237) 666-331-894"
        />
        <AboutUsCard
          img={email}
          title="Location"
          text1="0123 Some place"
          text2="9876 Some place"
        />
        <AboutUsCard
          img={email}
          title="Email"
          text1="fildineeesoe@gmil.com"
          text2="myebstudios@gmail.com"
        />
        <AboutUsCard
          img={workingHours}
          title="Working Hours"
          text1="Mon-Sat 09:00-20:00"
          text2="Sunday Emergency only"
        />
      </div>
    </div>
  );
};

export default AboutUs;
