import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
export interface RowProps{
    id:string;
    date:string;
    status:string;
    results:string;
} 

const Row = ({id, date, status, results }:RowProps)=>{
    return(
        <TableRow >
            <TableCell>{id}</TableCell>
            <TableCell className="">{results}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell className="">{status}</TableCell>
        </TableRow>
    )
}

export default Row