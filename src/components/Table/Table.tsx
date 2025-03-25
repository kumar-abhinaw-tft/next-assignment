import { Label } from "@radix-ui/react-label";
import Row, { RowProps } from "../TableRow/Row";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getFormattedDate } from "@/util/helper";
export interface TableProps{
    data:RowProps[]
}


const ScanTable = ({data=[]}:TableProps)=>{
  return (
    <div className="flex gap-2 flex-col">
        <Label className="font-bold">Scan Details</Label>
        <Table className="border rounded-[10px]">
        <TableHeader className=" bg-[black]">
            <TableRow >
                <TableHead className="text-white">Id</TableHead>
                <TableHead className="text-white">Result</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((row, index)=>(
                        <Row
                        date={getFormattedDate(row.date)}
                        status={row.status}
                        results={row.results}
                        id={row.id}
                        key={index}
                        />
            ))}
        </TableBody>
        </Table>
    </div>
  )
}

export default ScanTable