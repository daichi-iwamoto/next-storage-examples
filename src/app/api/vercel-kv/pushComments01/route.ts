import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await kv.rpush("comments01", JSON.stringify(data.newComment));
  } catch (e) {
    return NextResponse.json({ error: e });
  }

  try {
    const comments01 = await kv.lrange("comments01", 0, -1);
    return NextResponse.json(comments01);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
