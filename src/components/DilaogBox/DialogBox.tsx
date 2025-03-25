import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"

interface DialogProps{
 title ?:string,
 description?:string;
 children:React.ReactNode;
 triggerText?:string;
 open:boolean,
 onOpenChange:(value:boolean)=>void
}

const DialogBox = ({
    title,
    description,
    children,
    triggerText,
    open,
    onOpenChange,
 }:DialogProps) => {
  return (
    <Dialog
        open={open}
        onOpenChange={onOpenChange}
    >
      {triggerText && <DialogTrigger asChild>
        <Button className="bg-[black]">{triggerText}</Button>
      </DialogTrigger>}
      <DialogContent className="p-4" >
        <DialogHeader >
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>
            {description}
          </DialogDescription>}
        </DialogHeader>
        <div className="relative">
            {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}


export default DialogBox