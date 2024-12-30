import React from "react";

type Props = {
  children: React.ReactNode
};

function CircleInside({children}: Props) {
  return (
    <div className="cursor-pointer bg-main_background inline-block rounded-full p-4">
      {children}
    </div>
  );
}

export default CircleInside;
