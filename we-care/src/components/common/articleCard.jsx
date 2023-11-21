import React from "react";
import articleImg from "../../Images/article.png";
const ArticleCard = () => {
  return (
    <div className="flex lg:w-1/3  w-11/12 cursor-pointer mx-5 lg:mr-10 my-3">
      <img
        className="mr-4"
        width="160px"
        height="154px"
        src={articleImg}
        alt=""
      />
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-left font-worksans text-sm text-14 font-normal tracking-normal">
            Monday 05, September 2021 | By Author
          </p>
          <p className="text-black">
            This Article’s Title goes Here, but not too long.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
