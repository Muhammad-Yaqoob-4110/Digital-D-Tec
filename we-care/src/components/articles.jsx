import React from "react";
import articleImg from "../../src/Images/article.png";
import ArticleCard from "./common/articleCard";
const Articles = () => {
  return (
    <div className="bg-white text-articles">
      <p className="text-center font-worksans text-caption text-18 font-bold leading-21 tracking-wider">
        Better information, Better health
      </p>
      <p className="text-center font-yesevaone text-display2 lg:text-3xl text-xl font-bold leading-37 tracking-normal text-custom">
        News
      </p>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start lg:w-4/5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default Articles;
