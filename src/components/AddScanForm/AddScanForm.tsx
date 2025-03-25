"use client";
import { useState } from "react";
import DialogBox from "../DilaogBox/DialogBox";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import DatePicker from "../DatePicker/DatePicker";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/util/helper";
import { API_ENDPOINTS } from "@/util/constant";
import Loader from "../Loader/Loader";

const AddScanForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scanId, setScanId] = useState<string>("");
  const [scanStatus, setStatus] = useState<string>("");
  const [scanResult, setResult] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isLoading, setLoading]= useState<boolean>(false)
  const handleSubmit = async () => {
    setLoading(true)
    await sendRequest({
      url: API_ENDPOINTS.GET_SCANS,
      method: "POST",
      body: {
        id: scanId,
        date: date,
        status: scanStatus,
        results: scanResult,
      },
    });
    setScanId("");
    setDate(new Date());
    setResult("");
    setStatus("");
    setLoading(false);
    setOpen(false)

  };

  return (
    <DialogBox
      triggerText="Add Scan"
      open={open}
      title="Add Scan Form"
      onOpenChange={setOpen}
    >
      <>
        <Loader
            loading={isLoading}
            containerClassName="rounded-md flex items-center justify-center h-[100%] top-[0] left-[0] w-full"
            loaderClassName="h-10 w-10"
        />
        <div className="flex flex-col gap-5 w-full">
            <div className="flex gap-10 w-full items-center">
            <Label
                htmlFor="scanId"
                className="whitespace-nowrap font-bold w-[110px]"
            >
                Scan Id
            </Label>
            <Input
                name="scanId"
                value={scanId}
                onChange={(event) => {
                setScanId(event.target.value);
                }}
            />
            </div>
            <div className="flex gap-10 w-full items-center">
            <Label className="whitespace-nowrap font-bold w-[110px]">
                Scan Date
            </Label>
            <div className="w-full">
                <DatePicker date={date} setDate={setDate} />
            </div>
            </div>
            <div className="flex gap-10 w-full items-center">
            <Label className="whitespace-nowrap font-bold w-[110px]">
                Status
            </Label>
            <Input
                className="w-full"
                value={scanStatus}
                onChange={(event) => {
                setStatus(event.target.value);
                }}
            />
            </div>
            <div className="flex gap-10 w-full items-center">
            <Label className="whitespace-nowrap font-bold w-[110px]">
                Scan Result
            </Label>
            <Input
                value={scanResult}
                className="w-full"
                onChange={(event) => {
                setResult(event.target.value);
                }}
            />
            </div>
            <div className="flex gap-5 justify-end">
            <Button
                onClick={() => {
                setOpen(false);
                }}
            >
                Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
            </div>
        </div>
      </>
    </DialogBox>
  );
};

export default AddScanForm;
