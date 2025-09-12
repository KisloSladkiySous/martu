// src/pages/api/groups.ts
import type { APIRoute } from "astro";
import { db, Group, Media, eq } from "astro:db";

export const GET: APIRoute = async () => {
  const groups = await db.select().from(Group);

  const withMedia = await Promise.all(
    groups.map(async (g) => {
      const media = await db
        .select()
        .from(Media)
        .where(eq(Media.groupId, g.id));
      return { ...g, media };
    })
  );

  return new Response(JSON.stringify(withMedia), { status: 200 });
};
