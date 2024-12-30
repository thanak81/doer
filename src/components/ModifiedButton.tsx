import React from "react";
import { Button } from "./ui/button";

type Props = {
    onClick: React.MouseEventHandler | undefined,
    title: React.ReactNode
};

function ModifiedButton({onClick,title}: Props) {
  return (
    <Button onClick={onClick} className="bg-main_foreground  text-white font-bold p-6 text-[1.2rem]">
      {title}
    </Button>
  );
}

export default ModifiedButton;
