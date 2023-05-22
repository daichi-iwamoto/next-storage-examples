import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: Request) {
  try {
    const comments01 = await kv.lrange("comments01", 0, -1);
    return NextResponse.json(comments01);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
