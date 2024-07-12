import { pgTable, integer, text, serial, timestamp } from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: serial('id').primaryKey(), // shouldn't use serial
  title: text('title').notNull(),
  poster: text('poster'),
  year: integer('year'),
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(), // shouldn't use serial
  username: text('username').notNull(),
  password: text('password').notNull(),
  signUpDate: timestamp('signUpDate').notNull().defaultNow(),
});
