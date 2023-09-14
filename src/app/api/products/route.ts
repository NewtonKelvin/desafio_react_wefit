import { NextRequest, NextResponse } from "next/server";
import { products } from "./movies.json";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ products }, { status: 200 });
}
