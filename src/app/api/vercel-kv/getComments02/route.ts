import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: Request) {
  const comments02 = await kv.lrange("comments02", 0, -1);
  return NextResponse.json(comments02);
}
