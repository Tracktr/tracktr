import { Inject, Injectable } from '@nestjs/common';
import { Movies } from './entities/movies.entity';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';
import * as schema from '../../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class MoviesService {
  constructor(
    @Inject('DB_PROD') private drizzleProd: NodePgDatabase<typeof schema>,
  ) {}

  async findUnique(id: number) {
    return this.drizzleProd.query.movies.findFirst({
      where: eq(schema.movies.id, id),
    });
  }

  async findMany() {
    return this.drizzleProd.query.movies.findMany();
  }

  async create(data: CreateMoviesDto) {
    return this.drizzleProd.insert(schema.movies).values(data);
  }

  async update({
    id,
    data,
  }: {
    id: number;
    data: UpdateMoviesDto;
  }): Promise<Movies> {
    return this.drizzleProd
      .update(schema.movies)
      .set(data)
      .where(eq(schema.movies.id, id));
  }

  async delete(where: { id: number }): Promise<Movies> {
    return this.drizzleProd
      .delete(schema.movies)
      .where(eq(schema.movies.id, where.id));
  }
}
