"use client";
import Title from "@/app/components/Title";
import { featureData } from "@/app/data/global";
import Card from "@/components/card";
import ModifiedButton from "@/components/ModifiedButton";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useState } from "react";
import BookSection from "./BookSection";

type Props = {};

function BookPage({}: Props) {
  return (
    <main className="w-full flex flex-col gap-5 ">
      <section className="px-10 pl-20 p-10 place-content-start h-[32.5rem] font-primary text-base bg-yellow-600 rounded-bl-[80px] rounded-xl">
        <Title>Discover</Title>
        <div className="flex bg-white w-[400px] rounded-lg items-center mt-5">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px] rounded-lg focus-visible:ring-0 outline-none bg-white p-8 text-sm">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="favorite-book">Favorite</SelectItem>
                <SelectItem value="owned-book">Owned</SelectItem>
                <SelectItem value="future-book">Future</SelectItem>
                {/* <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="Find the book you like....."
            className="border-none w-[200px] focus-visible:ring-0 text-sm bg-white py-8"
          />
          <Button className="bg-main_foreground mx-5 text-white font-bold p-6 text-[1.2rem]">
            Search
          </Button>
        </div>
        <div className="mt-10 w-full">
        <BookSection />
        
      </div>
      </section>
 
    </main>
  );
}

export default BookPage;
