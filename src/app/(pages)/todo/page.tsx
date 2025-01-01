"use client";
import { DatePickerWithRange } from "@/app/components/DatePicker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { toDoSchemaData } from "@/app/schemas/todoSchema";
import { toDoType } from "@/app/types/global";
import { v4 as uuidv4 } from "uuid";

function ToDoPage({}) {
  const [toDoData, setToDoData] = useState<Array<toDoType>>([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<toDoType>({});

  const dateFormat = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleSubmitFunction(data: toDoType) {
    if (!data.task) return;
    setToDoData([
      ...toDoData,
      {
        id: uuidv4(),
        task: data.task,
        description: data.description,
        date: {
          from: data.date ? dateFormat.format(new Date(data.date.from)) : "",
          to: data.date ? dateFormat.format(new Date(data.date.to)) : "", // Default "N/A" if no to date
        },
        status: "On Progress",
        done: false,
      },
    ]);
    reset();
    console.log("date data", toDoData);
  }
  return (
    <main className="w-full flex flex-col h-screen p-5 pl-0 gap-2">
      <section className="flex flex-col">
        <section className="rounded-t-[80px] rounded-b-none px-10 pl-20 p-10 place-content-start text-white font-primary text-base bg-yellow-600  rounded-xl">
          <div className="font-bold text-3xl">Hey There, Thanak!</div>
          <div>What do you plan to do today?</div>
        </section>
        <div className="hidden lg:flex px-10 pl-20 p-10  rounded-t-none gap-4 items-center text-black bg-white rounded-lg">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>OK</AvatarFallback>
          </Avatar>
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full justify-center border-r mr-10">
              <span className="font-bold">Thanak Mech #123</span>
              <span className="text-[1.2rem]">Student</span>
            </div>
            <div className="flex flex-col w-[30%]">
              <span className="flex gap-4">
                <span className="font-bold">Tasks Complete Today:</span>
                <span>5/10</span>
              </span>
              <span className="flex gap-4">
                <span className="font-bold">Tasks Complete Goals:</span>
                <span className="text-yellow-500 font-bold">5</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="h-full p-5 bg-white overflow-hidden rounded-lg">
        <div className="h-[100%] grid lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <form
              onSubmit={handleSubmit(handleSubmitFunction)}
              className="flex flex-col gap-5 w-full "
            >
              <div className="flex flex-col justify-center items-start gap-4 w-full">
                <Label htmlFor="task" className="text-right font-bold">
                  Tasks
                </Label>
                <Input
                  {...register("task")}
                  id="task"
                  className="w-full focus:ring-none font-semibold py-5 h-[40px] text-lg border-black"
                />
                <ErrorMessage
                  errors={errors}
                  name="task"
                  render={({ message }) => (
                    <p className="text-[1.2rem] font-semibold ">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-4 w-full">
                <Label htmlFor="description" className="text-right font-bold">
                  Description
                </Label>
                <Input
                  type="text"
                  {...register("description")}
                  id="description"
                  className="focus:ring-none font-semibold py-5 h-[40px] text-lg border-black"
                />
              </div>
              <div className="flex flex-col   justify-center items-start gap-4 w-full">
                <Label htmlFor="description" className="text-right font-bold">
                  Due Date
                </Label>

                <DatePickerWithRange setValue={setValue} />
              </div>
              <div className="">
                <Button
                  //   type="submit"
                  className="bg-main_background text-white text-[1.2rem] p-4"
                >
                  Add Task
                </Button>
              </div>
            </form>
          </div>
          <div className="col-span-2 overflow-y-scroll h-full">
            <div className="h-full flex flex-col gap-2">
              {toDoData.map((data) => (
                <div
                  key={data.id}
                  className="h-[8rem] w-full flex justify-between items-center gap-5 p-5 bg-main_foreground rounded-lg text-white"
                >
                  <div className="flex gap-5 items-center">
                    <span>
                      <Input type="checkbox" className="" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[1rem] text-yellow-500 font-bold">
                        {data.date.from ? data.date.from : ""} - {data.date.to}
                      </span>
                      <span className="font-bold">{data.task}</span>
                      <span className="text-[1.2rem]">{data.description}</span>
                    </div>
                  </div>
                  <span>
                    <Badge className="bg-yellow-600" variant="secondary">
                      In Progress
                    </Badge>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ToDoPage;
