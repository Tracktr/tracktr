import { pgTable, integer, text } from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  poster: text('poster'),
  year: integer('year'),
});
