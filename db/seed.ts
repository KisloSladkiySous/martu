import { db, Group, Media, Users } from "astro:db";
import bcrypt from "bcrypt";

export default async function () {
  await db.insert(Group).values([
    { id: 1, title: "Первая группа", link: "pervaya-gruppa" },
    { id: 2, title: "Вторая группа", link: "vtoraya-gruppa" },
  ]);

  const passwordHash = await bcrypt.hash("admin", 10);
  await db.insert(Users).values({
    username: "admin",
    passwordHash,
  });
  console.log("Создан пользователь admin");

  // Добавляем медиа
  //   await db.insert(Media).values([
  //     {
  //       id: 1,
  //       groupId: 1,
  //       url: "/images/cover.jpg",
  //       type: "image",
  //       alt: "Cover",
  //     },
  //     {
  //       id: 2,
  //       groupId: 1,
  //       url: "/videos/teaser.mp4",
  //       type: "video",
  //       poster: "/images/teaser-poster.jpg",
  //     },
  //     {
  //       id: 3,
  //       groupId: 2,
  //       url: "/images/another.jpg",
  //       type: "image",
  //     },
  //   ]);
}
