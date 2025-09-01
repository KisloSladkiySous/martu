// db/config.ts
import { defineDb, defineTable, column, NOW } from "astro:db";

const Group = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    date: column.date({ default: NOW }),
    link: column.text({ unique: true }),
  },
  indexes: [{ on: ["date"] }],
});

const Media = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    groupId: column.number({ references: () => Group.columns.id }),
    url: column.text(),
    type: column.text({ enum: ["image", "video"] }),
    alt: column.text({ optional: true }),
    poster: column.text({ optional: true }),
  },
});

export const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text({ unique: true }),
    passwordHash: column.text(), // будем хранить хэш пароля
    createdAt: column.date({ default: NOW }),
  },
});

export const Reviews = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    text: column.text(),
    author: column.text(),
    authorImageId: column.number({
      references: () => Media.columns.id,
      nullable: true,
    }),
    mediaId: column.number({
      references: () => Media.columns.id,
      nullable: true,
    }),
    createdAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Group, Media, Users, Reviews },
});
