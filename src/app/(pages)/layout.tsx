import React from "react";
import Sidebar from "../components/Sidebar";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return <div className="flex w-full text-base">
    {/* <Sidebar/> */}
    {children}
    </div>;
}

export default layout;
