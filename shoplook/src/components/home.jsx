import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* Hero section */}
        <div className="bg-navbar lg:h-screen">
          <div className="lg:h-screen flex justify-center  items-center">
            <div className="flex flex-wrap justify-center w-11/12 lg:gap-44">
              <div className="w-[382px] lg:h-[416px] lg:pb-0 pb-5  flex flex-col justify-start items-center gap-10 ">
                <p className="font-[600] font-poppins text-[56px] leading-[64px] tracking-[.005rem] text-[#fff] ">
                  Happiness is Creating Moodboards
                </p>
                <div className="w-full">
                  <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-black bg-white rounded-[100px] w-[192px] h-[48px] mr-2 hover:bg-white">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[382px] h-[416px] ">
                <img
                  className="h-[384px]"
                  src="https://shoplook.io/assets/imgs/moodboards.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Easy to Use Creative Canvas */}
        <div className="bg-white pt-10 pb-10">
          <p className="font-[500] font-poppins text-[28px] leading-[34px] text-[#021422] text-center">
            Easy to Use Creative Canvas
          </p>
          <p className="font-[500] font-poppins text-[#021422] leading-[24px] text-[20px] text-center pt-5">
            Drag and drop from a selection of millions of images or upload your
            own
          </p>
          <div className="flex justify-center items-center pt-5">
            <img
              className="w-9/12"
              src="https://shoplook.io/assets/imgs/maincanvasgraphic.png"
              alt=""
            />
          </div>
        </div>
        {/* features cards */}
        <div className="bg-[rgba(139,115,255,.88)] flex justify-center flex-wrap gap-2 pt-10 p-10">
          <div className="w-[301px] h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
            <img
              className="w-[128px]"
              src="https://shoplook.io/assets/imgs/cd.png"
              alt=""
            />
            <p className=" w-[200px]">Remove background from any images</p>
          </div>
          <div className="w-[301px] h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
            <img
              className="w-[128px]"
              src="https://shoplook.io/assets/imgs/cd.png"
              alt=""
            />
            <p className=" w-[200px]">Remove background from any images</p>
          </div>

          <div className="w-[301px] h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
            <img
              className="w-[128px]"
              src="https://shoplook.io/assets/imgs/cd.png"
              alt=""
            />
            <p className=" w-[200px]">Remove background from any images</p>
          </div>
          <div className="w-[301px] h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
            <img
              className="w-[128px]"
              src="https://shoplook.io/assets/imgs/cd.png"
              alt=""
            />
            <p className=" w-[200px]">Remove background from any images</p>
          </div>
        </div>
        {/* Featured Designs */}

        <div className="pt-10 bg-white pb-10">
          <p className="font-[500] font-poppins text-[28px] leading-[-.18px] text-[#021422] text-center">
            Featured Designs
          </p>
          <div className="w-full pt-5 flex justify-center">
            <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-black bg-white rounded-[100px] w-[192px] h-[48px] mr-2 hover:bg-white">
              Explore the feed
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
