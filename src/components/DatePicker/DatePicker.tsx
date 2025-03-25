"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "../ui/calendar"

interface Props {
 date:Date|undefined,
 setDate:(date:Date|undefined)=>void
}

const DatePicker = ({date, setDate}:Props) =>  {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setOpen(false) // Close the popover on date selection
  }
  return (
    <Popover
        open={open}
        onOpenChange={setOpen}
    >
      <PopoverTrigger asChild className="w-full">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker