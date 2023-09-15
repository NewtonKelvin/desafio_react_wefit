import { NextRequest, NextResponse } from "next/server";
import json from "./movies.json";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ products: json.products }, { status: 200 });
}
