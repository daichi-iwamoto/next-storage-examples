import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  const data = await request.json();
  await kv.rpush("comments01", JSON.stringify(data.newComment));
  return NextResponse.json({ data });
}
