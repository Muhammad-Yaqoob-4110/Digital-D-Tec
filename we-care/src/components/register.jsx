import React from "react";
import Input from "./common/input";
import CheckBox from "./common/checkbox";
import Button from "./common/button";
const Register = () => {
  return (
    <div className="bg-white lg:px-20">
      <div className="bg-registerCustom lg:p-12 p-5 ">
        <div className="lg:w-2/5">
          <p className="font-poppins lg:text-2xl text-xl font-semibold leading-14 text-custom">
            🌿Unifying Wellness & Care
          </p>
          <p className="text-custom font-poppins text-base font-sm leading-8">
            Empower Your Health Journey with Personalized Medication Management,
            Expert Guidance, and a Supportive Community
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="lg:w-1/2 w-11/12 bg-white rounded-2xl border border-solid border-gray-400">
            <div className="p-10">
              <p className="font-poppins text-xl font-semibold leading-14 text-register">
                Sign up now
              </p>
              <div className="flex justify-center">
                <div className="w-2/4 mr-2">
                  <Input label="First Name" />
                </div>
                <div className="w-2/4">
                  <Input label="First Name" />
                </div>
              </div>
              <Input label="Email address" />
              <Input label="Phone number" />
              <Input label="Password" />
              <Input label="Home Address" />
              {/* CheckBox */}
              <div className="mt-8 flex justify-center">
                <div className="flex lg:flex-col justify-center">
                  <CheckBox />
                </div>
                <span className="ml-1 text-custom font-poppins text-sm font-normal leading-6">
                  By creating an account, I agree to our Terms of use and
                  Privacy Policy{" "}
                </span>
              </div>
              {/* CheckBox */}
              <div className="mt-8 flex justify-center">
                <div className="">
                  <CheckBox />
                </div>
                <span className="ml-1 text-custom font-poppins text-sm font-normal leading-6">
                  By creating an account, I am also consenting to receive SMS
                  messages and emails, including product new feature updates,
                  events, and marketing promotions.{" "}
                </span>
              </div>
              <div className="mt-4">
                <Button text="Sign up" />
                <span className="text-custom">
                  Already have an ccount?{" "}
                  <span className="underline cursor-pointer btn bg-white border-white hover:border-white hover:bg-white p-0 text-custom">
                    Log in
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
