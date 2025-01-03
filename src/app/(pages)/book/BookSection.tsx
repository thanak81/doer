"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ModifiedButton from "@/components/ModifiedButton";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bookDataFake } from "@/app/data/global";
type Props = {};

function BookSection({}: Props) {
  const { toast } = useToast();
  const [bookData, setBookData] = useState(bookDataFake);
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="text-h3 text-white font-bold">Book Recommendation</div>
        <Button className="bg-white">View All</Button>
      </div>
      <div className="flex gap-5">
        {bookData.map((book) => (
          <Drawer key={book.id}>
            <DrawerTrigger asChild>
              <Image
                src={book.image}
                alt="book"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </DrawerTrigger>
            <DrawerContent className="bg-main_background text-white text-base py-10 py-10">
              <div className="mx-auto w-full max-w-7xl flex flex-col justify-around h-full gap-10">
                <DrawerHeader className="p-0">
                  <DrawerTitle className="font-bold text-h3">
                    Book Detail
                  </DrawerTitle>
                </DrawerHeader>
                <div className=" h-full flex flex-col  justify-center">
                  <div className="flex gap-5 ">
                    <Image
                      src={book.image}
                      alt="book"
                      width={250}
                      height={250}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col">
                      <div className="text-h2 font-extrabold font-secondary text-yellow-500">
                        {book.title}
                      </div>
                      <div className="font-primary">
                        <span>Category: </span>
                        <span className="text-yellow-500 font-bold">
                          {book.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="p-0">
                  <ModifiedButton
                    onClick={() => {
                      toast({
                        className:
                          "border-none outline-none bg-yellow-600 text-white",
                        title: "Book add to Reading List",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                      });
                    }}
                    title="Add to Reading list"
                  />
                  <DrawerClose asChild>
                    <ModifiedButton title="Close" />
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
      </div>{" "}
    </section>
  );
}

export default BookSection;
