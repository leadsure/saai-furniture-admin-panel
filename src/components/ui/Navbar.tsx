import React, { useEffect, useRef } from "react";
import { SofaSetDropDown } from "./SofaSetDropDown";
import { Link } from "react-router-dom";
import { useGetAdmin, useGetSubAdmin } from "../../hooks";
import { DashboardDropDown } from "../DashboardDropDown";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../../store";

export const navObj: Array<{
  title?: string;
  component?: React.ReactNode;
  link: string;
}> = [
  {
    title: "dining set",
    link: "/dining",
  },
  {
    title: "blog",
    link: "/blog",
  },
  {
    title: "market area",
    link: "/market-area",
  },
];

export const Navbar = () => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();
  const is_admin = useRecoilValue(isAdmin);
  useEffect(() => {
    let previousScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      if (previousScroll > currentScroll) {
        navbar!.current!.style.top = "0";
      } else {
        navbar!.current!.style.top = "-100px";
      }
      previousScroll = currentScroll;
    });
  });
  return (
    <div
      ref={navbar}
      className="max-mobile:hidden  fixed top-0 w-screen h-[100px] flex justify-between items-center transition-all delay-300 duration-300 pl-[20px] pr-[100px] bg-white shadowww z-[2]"
    >
      <Link to={"/sofa"}>
        <div className="flex justify-center items-center gap-[10px] text-[#731907] cursor-pointer">
          <img
            src={"/saai-Furniture-Art-logo.png"}
            alt="logo"
            className="w-[150px] h-[70px]"
          />
        </div>
      </Link>
      <div className="">
        <ul className="flex justify-between items-center gap-[30px] text-black">
          {admin || subAdmin || is_admin ? (
            <li className="w-fit h-fit">
              <SofaSetDropDown />
            </li>
          ) : (
            <li className="text-[20px] font-bold hover:bg-[rgba(0,0,0,0.7)] p-[5px] pr-[15px] pl-[15px] hover:text-white rounded-lg cursor-pointer">
              Sofa Set
            </li>
          )}
          {navObj.map(({ title, link }, index) => {
            return (
              <Link to={link} key={index}>
                <li className="text-[20px] font-bold hover:bg-[rgba(0,0,0,0.7)] p-[5px] pr-[15px] pl-[15px] hover:text-white rounded-lg">
                  {title}
                </li>
              </Link>
            );
          })}

          {admin || subAdmin || is_admin ? (
            <DashboardDropDown />
          ) : (
            <Link to={"/login"}>
              <li className="text-[20px] font-bold hover:bg-[rgba(0,0,0,0.7)] p-[5px] pr-[15px] pl-[15px] hover:text-white rounded-lg">
                Log In
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};
