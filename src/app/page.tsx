"use client"
import { Button } from '@/components/ui/button';
import './styles/globals.css';
import Table from "@/components/Table/Table";
import AddScanForm from '@/components/AddScanForm/AddScanForm';
import { toast } from "react-hot-toast";
import { useEffect, useState } from 'react';
import { sendRequest } from '@/util/helper';
import { API_ENDPOINTS } from '@/util/constant';
import { RowProps } from '@/components/TableRow/Row';
import Loader from '@/components/Loader/Loader';

export default function Home() {

 const [data, setData] = useState<RowProps[]>([])
 const [isLoading, setIsLoading] = useState<boolean>(false)
 const getData = async ()=>{
  try{
    setIsLoading(true)
    const response = await sendRequest({
      url:API_ENDPOINTS.GET_SCANS,
      method:"GET",
    })
    setData(response || [])
    setIsLoading(false)
  }catch(error:any){
    toast.error(error?.message || "Something went wrong!");
  }
 }
  useEffect(()=>{
    getData();
  },[])

  return (
    <>
    <Loader 
      loading={isLoading}
      containerClassName='flex items-center justify-center h-[100%] top-[0] left-[0] w-full z-[9999] bg-[#32323280] '
      loaderClassName="h-12 w-12"
    />
    <div className='flex p-[30px] gap-[6px] flex-col' >
      <div className='flex justify-end gap-10'>
       <Button onClick={getData}>Get New Scans</Button> <AddScanForm/>
      </div>
      <Table data={data}/>
    </div>
    </>
  );
}
