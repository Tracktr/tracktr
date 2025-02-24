import { pgTable, integer, text } from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: integer('id').primaryKey(),
  title: text('title'),
  poster: text('poster'),
  year: integer('year'),
});
