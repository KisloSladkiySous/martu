import type { APIRoute } from "astro";
import { db, Reviews, eq } from "astro:db";

export const POST: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  if (isNaN(id)) return new Response("Неверный ID", { status: 400 });

  await db.delete(Reviews).where(eq(Reviews.id, id));

  return new Response(null, {
    status: 303,
    headers: { Location: "/admin/reviews" },
  });
};
