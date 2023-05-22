import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await sql`insert into users (name, mail) values (${data.name}, ${data.mail})`;
  } catch (e) {
    return NextResponse.json({ error: e });
  }

  const { rows } = await sql`select * from users;`;
  return NextResponse.json({ rows });
}
