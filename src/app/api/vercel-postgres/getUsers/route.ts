import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchInput = searchParams.get("searchInput");

  const { rows } = !searchInput
    ? await sql`select * from users;`
    : await sql`
        select * from users 
        where 
          name like ${`%${searchInput}%`} or
          mail like ${`%${searchInput}%`};
      `;
  return NextResponse.json({ rows });
}
