import React from "react";
import Button from "./common/button";

const InputField = ({ label, type, name, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...rest}
      />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex justify-center bg-registerCustom">
      <div className="p-10 w-[700px]">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal Information
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                {/* Repeat for each input field as per your design */}

                <InputField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <InputField
                  label="Second Name"
                  type="text"
                  name="secondName"
                  placeholder="Second Name"
                />
                {/* ... Date Of Birth ... */}
                <div className="">
                  <label
                    for="dob"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <InputField
                  label="Phone Number"
                  type="text"
                  name="phoneNo"
                  placeholder="Phone Number"
                />
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <Button text="Guard My Details" />
              </div>
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Eamil address
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                {/* Repeat for each input field as per your design */}

                <InputField
                  label="Email Address"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
                <InputField
                  label="Password"
                  type="text"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <Button text="Secure Email Essentials" />
              </div>
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Password</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                {/* Repeat for each input field as per your design */}

                <InputField
                  label="Current Password"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                />
                <InputField
                  label="New Password"
                  type="text"
                  name="newpassword"
                  placeholder="New Password"
                />
                <InputField
                  label="Confirm Password"
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <Button text="Lock in the Secrets" />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
