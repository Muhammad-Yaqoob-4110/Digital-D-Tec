import React, { Component } from "react";
import { Link } from "react-router-dom";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-center bg-registerCustom">
        <div className="p-10 w-[700px]">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Dashboard
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Home / Dashboard
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border">
                  {/* Repeat for each input field as per your design */}
                  <Link
                    to="/doctors-crud"
                    className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full"
                  >
                    <p className="font-[200px] text-[20px]">Doctors</p>
                    <p>15</p>
                  </Link>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Patients</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[18px]">Representative</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Nurses</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Pharmachist</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Labratorist</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Accountant</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Receptionist</p>
                    <p>15</p>
                  </div>
                  <div className="hover:bg-[#009688] text-white bg-[#009670] cursor-pointer btn shadow-[#009688] border-[#009688] hover:border-[#009688] flex justify-between w-full">
                    <p className="font-[200px] text-[20px]">Doctors</p>
                    <p>15</p>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
