"use client";
import Title from "@/app/components/Title";
import { featureData } from "@/app/data/global";
import Card from "@/components/card";
import React, { useState } from "react";
type Props = {};

function FeaturePage({}: Props) {
  const [data, setData] = useState(featureData);

  return (
    <main className="font-primary ">
      <div className="flex gap-5 flex-col">
        <Title>Personal Tracking</Title>
        <div className="flex flex-wrap gap-5  w-full">
          {data.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default FeaturePage;
