import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";
import { db, Media } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Получаем groupId
  const groupIdStr = formData.get("groupId") as string | null;
  if (!groupIdStr) {
    return new Response(JSON.stringify({ error: "Не указан groupId" }), {
      status: 400,
    });
  }
  const groupId = Number(groupIdStr);

  // Получаем файлы
  const files = formData.getAll("file") as File[];
  if (files.length === 0) {
    return new Response(JSON.stringify({ error: "Файлы не загружены" }), {
      status: 400,
    });
  }

  const savedUrls: string[] = [];

  // Путь для сохранения
  const uploadDir = path.join(process.cwd(), "src", "assets", "uploads");
  fs.mkdirSync(uploadDir, { recursive: true });

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Генерируем уникальное имя файла
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    // Сохраняем файл
    fs.writeFileSync(filePath, buffer);

    // Сохраняем путь для использования в проекте (относительно src)
    const url = `/src/assets/uploads/${filename}`;

    // Сохраняем в таблицу Media
    await db.insert(Media).values({
      groupId,
      type: "image", // можно определять по mime
      url,
    });

    savedUrls.push(url);
  }

  // Перенаправляем обратно в админку
  return new Response(null, {
    status: 303,
    headers: {
      Location: "/admin",
    },
  });
};
