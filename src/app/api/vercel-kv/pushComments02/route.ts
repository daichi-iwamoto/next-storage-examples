import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await kv.rpush("comments02", JSON.stringify(data.newComment));
  } catch (e) {
    return NextResponse.json({ error: e });
  }

  try {
    const comments02 = await kv.lrange("comments02", 0, -1);
    return NextResponse.json(comments02);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
