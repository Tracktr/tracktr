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

  async findFirst(id: number) {
    return await this.drizzleProd.query.movies.findFirst({
      where: eq(schema.movies.id, id),
    });
  }

  async findMany() {
    return await this.drizzleProd.query.movies.findMany();
  }

  async create(data: CreateMoviesDto) {
    return await this.drizzleProd
      .insert(schema.movies)
      .values(data)
      .returning();
  }

  async update({
    id,
    data,
  }: {
    id: number;
    data: UpdateMoviesDto;
  }): Promise<Movies[]> {
    data.id = id;

    return await this.drizzleProd
      .update(schema.movies)
      .set(data)
      .where(eq(schema.movies.id, id))
      .returning();
  }

  async delete(id: number): Promise<Movies[]> {
    await this.drizzleProd
      .delete(schema.movies)
      .where(eq(schema.movies.id, id));

    return;
  }
}
