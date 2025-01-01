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
type DateRangePropType = {
  setValue: UseFormSetValue<Input>;
};
export function DatePickerWithRange({ setValue }: DateRangePropType) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: addDays(new Date(2025, 0, 20), 20),
  });
  React.useEffect(() => {
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
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto  p-0 bg-white" align="start">
          <Calendar
            className="bg-main_background text-white "
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
