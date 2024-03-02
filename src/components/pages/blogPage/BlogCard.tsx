"use client";
import React from "react";

interface BlogCard {
  location?: string;
  imageUrl: string;
  title: string;
}

export const BlogCard: React.FC<BlogCard> = ({ imageUrl, title }) => {
  return (
    <div className="relative w-fit h-fit cursor-pointer col-span-12 mobile:col-span-6  mobile:mt-[100px]">
      <img
        src={imageUrl}
        alt={title}
        className="w-[350px] mobile:w-[700px] h-[400px]  rounded-md"
      />
      <div className="absolute flex flex-col justify-center items-center bottom-[-20%] left-[50%] w-[80%] mobile:w-[540px] h-[150px]  translate-x-[-50%] rounded-md bg-[#99999] bg-white gap-[20px] shadowww ">
        <div className="text-[20px] font-[400]">{title}</div>

        <button className="w-[130px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full">
          READ MORE
        </button>
      </div>
    </div>
  );
};
