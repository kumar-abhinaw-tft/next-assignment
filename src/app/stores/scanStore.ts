import { API_ENDPOINTS } from '@/util/constant';
import { sendRequest } from '@/util/helper';
import toast from 'react-hot-toast';
import { create } from 'zustand'

export interface Scan{
    id:string;
    date:string;
    status:string;
    results:string;
} 

interface ScanStore{
  scans: Scan[];
  loading: boolean;
  error: string | null;
  fetchScans: () => Promise<void>;
}



const useScanStore = create<ScanStore>((set) => ({
  scans :[],
  loading: false,
  error:  null,
  fetchScans: async () => {
    set({ loading: true, error: null });
    try {
      const response = await sendRequest({
        url:API_ENDPOINTS.GET_SCANS,
        method:"GET",
      })
      set({ scans: response.data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
      toast.error("Something went wrong, Please try again later.")
    }
  },
}))


export {
    useScanStore,
}