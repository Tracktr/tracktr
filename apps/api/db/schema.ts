import { pgTable, integer, text, serial } from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: serial('id').primaryKey(), // shouldn't use serial
  title: text('title').notNull(),
  poster: text('poster'),
  year: integer('year'),
});
