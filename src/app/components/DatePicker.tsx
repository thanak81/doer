"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseFormSetValue } from "react-hook-form";
import { Input } from "../(pages)/todo/page";
import { toDoType } from "../types/global";
type DateRangePropType = {
  setValue: UseFormSetValue<Input>;
  data: toDoType;
};
export function DatePickerWithRange({ setValue, data }: DateRangePropType) {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    if (data && data.date) {
      setDate(data.date);
    }
  }, [data]);

  React.useEffect(() => {
    if (!date) {
      setDate(new Date());
    }
    setValue("date", date);
  }, [date, setValue]);
  return (
    <div className={cn(" grid gap-2")}>
      <Popover>
        <PopoverTrigger className="h-[40px] border-black" asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto  p-0 bg-white" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
