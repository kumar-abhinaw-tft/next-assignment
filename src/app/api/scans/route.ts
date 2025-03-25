import { NextResponse } from "next/server";

let scans = [
  {
    id: "scan-001",
    date: "2024-05-01T12:00:00Z",
    status: "Completed",
    results: "No issues found",
  },
  {
    id: "scan-002",
    date: "2024-05-02T15:30:00Z",
    status: "Failed",
    results: "Some issues found",
  },
  {
    id: "scan-003",
    date: "2025-06-02T18:30:00Z",
    status: "Failed",
    results: "Some issues found",
  },
  {
    id: "scan-004",
    date: "2025-08-07T10:30:00Z",
    status: "Completed",
    results: "No issue found",
  },
  {
    id: "scan-005",
    date: "2024-08-07T10:30:00Z",
    status: "Completed",
    results: "No issue found",
  },
  {
    id: "scan-006",
    date: "2024-11-07T10:30:00Z",
    status: "Failed",
    results: "Some issue found",
  },
  {
    id: "scan-007",
    date: "2025-01-07T10:30:00Z",
    status: "Failed",
    results: "Some issue found",
  },
  
];

// GET Request
export async function GET() {
  return NextResponse.json(scans);
}

// POST Request
export async function POST(req: Request) {
  const body = await req.json();
  const newScan = { ...body };
  scans.push(newScan);
  const res ={
    success:true,
    data:newScan,
    message:"Details added successfully."
  }
  return NextResponse.json(res, { status: 201 });
}
