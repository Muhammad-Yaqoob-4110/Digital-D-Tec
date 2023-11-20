import React from "react";
import Input from "./common/input";
import CheckBox from "./common/checkbox";
import Button from "./common/button";
const Login = () => {
  return (
    <div className="bg-white lg:px-20">
      <div className="bg-registerCustom lg:p-12 p-5 ">
        <div className="lg:w-2/5">
          <p className="font-poppins lg:text-2xl text-xl font-semibold leading-14 text-custom">
            🌿Welcome Back
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
                Sign in now
              </p>

              <Input label="Email address" />
              <Input label="Password" />

              <div className="mt-4">
                <Button text="Sign in" />
                <span className="text-custom">
                  Don’t have an account?{" "}
                  <span className="underline cursor-pointer btn bg-white border-white hover:border-white hover:bg-white p-0 text-custom">
                    Sign up
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

export default Login;
