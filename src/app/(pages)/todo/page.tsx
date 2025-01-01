"use client";
import { DatePickerWithRange } from "@/app/components/DatePicker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { toDoSchemaData } from "@/app/schemas/todoSchema";
import { toDoType } from "@/app/types/global";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
function ToDoPage({}) {
  const [toDoData, setToDoData] = useState<Array<toDoType>>([]);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<toDoType>({});
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        task: "",
        description: "",
      });
    }
  }, [isSubmitSuccessful, reset]);
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
        date: data.date? new Date(data.date) : new Date(),
        done: false,
      },
    ]);
    console.log("date data", toDoData);
  }
  console.log(watch("date"));
  const [checked, setChecked] = useState(false);
  console.log("checked value", checked);
  function updateToDo(id) {
    setToDoData(
      toDoData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            done: !data.done,
          };
        } else {
          return data;
        }
      })
    );

    console.log(toDoData);
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
                    <p className="text-[1.2rem] font-semibold ">{message}</p>
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
              <div className="flex w-full sm:justify-end lg:justify-end md:justify-start">
                <Button
                  //   type="submit"
                  className=" bg-main_background text-white text-[1.2rem] p-5"
                >
                  Add Task
                </Button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 overflow-y-scroll h-full">
            <div className="h-full flex flex-col gap-2">
              {toDoData.map((data) => (
                <div
                  key={data.id}
                  className="h-[8rem] w-full flex justify-between items-center gap-5 p-5 bg-main_foreground rounded-lg text-white"
                >
                  <div className="flex gap-5 items-center">
                    <span>
                      <Input
                        type="checkbox"
                        // onToggle={()=> updateToDo(data.id)}
                        onChange={() => updateToDo(data.id)}
                        className=""
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[1rem] text-yellow-500 font-bold">
                        {data.date ? dateFormat.format(data.date) : ""}
                        {/* {dateFormat.format(data.date.from)} - { dateFormat.format(data.date.to)} */}
                      </span>
                      {data.done ? (
                        <del color="red" className="text-green-500 font-bold">
                          {data.task}
                        </del>
                      ) : (
                        <span className="font-bold">{data.task}</span>
                      )}
                      {/* <span className="font-bold">{data.task}</span> */}
                      <span className="text-[1.2rem]">{data.description}</span>
                    </div>
                  </div>
                  <span className="flex gap-5">
                    <Badge
                      className={`${
                        data.done ? "bg-green-500" : "bg-yellow-600"
                      }`}
                      variant="secondary"
                    >
                      {data.done ? "Done" : "On Progress"}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Edit className="cursor-pointer" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                          <DialogTitle className="text-base">
                            Edit Task
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                              Task
                            </Label>
                            <Input
                              defaultValue={data.task}
                              id="task"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                              Description
                            </Label>
                            <Input
                              id="description"
                              defaultValue={data.description}
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            className="bg-main_foreground text-white p-5"
                            type="submit"
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
