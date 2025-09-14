// import type { APIRoute } from "astro";
// import { db, Group, Media, eq } from "astro:db";

// export const POST: APIRoute = async ({ params }) => {
//   const id = Number(params.id);

//   if (isNaN(id)) {
//     return new Response(JSON.stringify({ error: "Неверный ID" }), {
//       status: 400,
//     });
//   }

//   // Удаляем медиа группы
//   await db.delete(Media).where(eq(Media.groupId, id));

//   // Удаляем саму группу
//   await db.delete(Group).where(eq(Group.id, id));

//   // Перенаправляем обратно в админку
//   return new Response(null, {
//     status: 303,
//     headers: {
//       Location: "/admin",
//     },
//   });
// };

// export const prerender = false;
