import CircleInside from "@/app/icons/CircleInside";
import Play from "@/app/icons/Play";
import { featureObject } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: featureObject;
};

function Card({ data }: Props) {
  return (
    <div
      className={` bg-[url('/book.jpg')] bg-cover bg-no-repeat shadow-xl bg-main_foreground  rounded-[3rem] h-[20rem] w-[20rem] text-4xl text-white`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className=" p-8  h-full  flex flex-col justify-between">
        <Link href={data.link} className="">
          <CircleInside>
            <Play />
          </CircleInside>
        </Link>
        <div>
          <div className="font-bold text-[2rem]">{data.title}</div>
          <div className="font-secondary text-[1rem]">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
