"use client"
import './styles/globals.css';
import Table from "@/components/Table/Table";
import AddScanForm from '@/components/AddScanForm/AddScanForm';
import { useEffect, } from 'react';
import Loader from '@/components/Loader/Loader';
import { useScanStore } from './stores/scanStore';

export default function Home() {

 const { scans, loading, fetchScans} = useScanStore()
  useEffect(()=>{
    fetchScans();
  },[])

  return (
    <>
    <Loader 
      loading={loading}
      containerClassName='flex items-center justify-center h-[100%] top-[0] left-[0] w-full z-[9999] bg-[#32323280] '
      loaderClassName="h-12 w-12"
    />
    <div className='flex p-[30px] gap-[6px] flex-col' >
      <div className='flex justify-end gap-10'>
        <AddScanForm/>
      </div>
      <Table data={scans}/>
    </div>
    </>
  );
}
