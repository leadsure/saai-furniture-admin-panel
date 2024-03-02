"use client";
import { useGetCategory } from "../../hooks";
import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

interface SofaDropdown {
  location?: string;
}

export const SofaSetDropDown: React.FC<SofaDropdown> = () => {
  const [open, setOpen] = useState(false);
  const sofaDropDown = useRef<HTMLDivElement | null>(null);
  const { categories } = useGetCategory();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <Link to={"/sofa"}>
        <div className="flex items-center gap-[10px] font-[600] text-[20px] cursor-pointer  ">
          <span>sofa set</span>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </Link>
      <div
        ref={sofaDropDown}
        className={`absolute top-[30px] w-[250px]  bg-[rgba(0,0,0,0.7)] transition-all duration-300  origin-top translate-x-[-60px] rounded-lg p-[5px] pr-[10px] pl-[10px] ${
          open ? "" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col gap-[5px] text-white">
          {categories
            ?.filter(({ title }) => title.toLowerCase() !== "dining set")
            .map(({ id, title }, index) => {
              const link = title.toLowerCase().split(" ").join("-");

              return (
                <Link key={index} to={`/sofa/${link}`}>
                  <li
                    key={id}
                    className="hover:bg-[rgba(0,0,0,0.9)] text-[20px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
                  >
                    {title}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
