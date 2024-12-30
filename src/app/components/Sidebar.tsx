"use client";
import React from "react";
import Title from "./Title";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Book, HomeIcon, ListCheck, LogOutIcon, Settings, Timer } from "lucide-react";

type Props = {};

function Sidebar({}: Props) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" bg-main_background h-screen w-[30rem] text-[1.4rem] text-white">
      <div className="p-10 flex flex-col gap-10 h-full justify-between">
        <div className="flex flex-col gap-5">
          <div className=" font-bold text-yellow-600 text-4xl">DOER</div>
          <div>
            <div className="text-sm text-yellow-500">Menu</div>
            <div className="flex flex-col gap-10 mt-5 font-semibold ">
              <Link
                href={"/"}
                className="cursor-pointer flex items-center gap-5 text-[#FAF3DD] w-full"
              >
                <HomeIcon />
                <span>Home</span>
              </Link>
              <Link
                href={"/todolist"}
                className="cursor-pointer flex items-center gap-5 text-[#FAF3DD] w-full"
              >
                <ListCheck />
                <span>To Do List</span>
              </Link>
              <Link
                href={"/timer"}
                className="cursor-pointer flex items-center gap-5 text-yellow-600 w-full"
              >
                <Timer />
                <span>Timer</span>
              </Link>
              <Link
                href={"/book"}
                className="cursor-pointer flex items-center gap-5 text-[#FAF3DD] w-full"
              >
                <Book />
                <span>Book Tracking</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-5 font-semibold ">
          <hr />
          <Link
            href={"/setting"}
            className="cursor-pointer flex items-center gap-5 text-[#FAF3DD] w-full"
          >
            <Settings />
            <span>Setting</span>
          </Link>
          <Link
            href={"/"}
            className="cursor-pointer flex items-center gap-5 text-[#FAF3DD] w-full"
          >
            <LogOutIcon/>
            <span>Log out</span>
          </Link>
        </div>
        <div className="h-full bg-yellow-600 rounded-[50px]"></div>
      </div>
    </div>
  );
}

export default Sidebar;
