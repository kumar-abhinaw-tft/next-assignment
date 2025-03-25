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
  return NextResponse.json(newScan, { status: 201 });
}
