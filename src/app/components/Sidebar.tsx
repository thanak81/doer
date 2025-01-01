"use client";
import React from "react";
import Title from "./Title";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Book,
  ChartLine,
  HomeIcon,
  ListCheck,
  LogOutIcon,
  Settings,
  Timer,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { sideBarType } from "../types/global";

export const sideBarData: Array<sideBarType> = [
  {
    id: uuidv4(),
    title: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    id: uuidv4(),
    title: "To Do List",
    href: "/todo",
    icon: <ListCheck />,
  },
  {
    id: uuidv4(),
    title: "Timer",
    href: "/timer",
    icon: <Timer />,
  },
  {
    id: uuidv4(),
    title: "Book Tracking",
    href: "/book",
    icon: <Book />,
  },
  {
    id: uuidv4(),
    title: "Stats",
    href: "/stats",
    icon: <ChartLine />,
  },
];
function Sidebar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" bg-main_background h-screen w-[30rem] text-[1.4rem] text-white overflow-y-hidden">
      <div className="p-10 pb-5 flex flex-col gap-10 h-full justify-between">
        <div className="flex flex-col gap-5">
          <div className=" font-bold text-yellow-600 text-4xl">DOER</div>
          <div>
            <div className="text-sm text-yellow-500">Menu</div>
            <div className="flex flex-col gap-10 mt-5 font-semibold ">
              {sideBarData.map((sidebar) => (
                <Link
                  key={sidebar.id}
                  href={sidebar.href}
                  className={`${
                    pathName === sidebar.href ? "text-yellow-600" : ""
                  } cursor-pointer flex items-center  gap-5  w-full`}
                >
                  {sidebar.icon}
                  <span>{sidebar.title}</span>
                </Link>
              ))}
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
            <LogOutIcon />
            <span>Log out</span>
          </Link>
        </div>
        <div className="h-full bg-yellow-600 rounded-[50px]"></div>
      </div>
    </div>
  );
}

export default Sidebar;
