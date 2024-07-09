import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movies } from './entities/movies.entity';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async findUnique(moviesWhereUniqueInput: {
    id: number;
  }): Promise<Movies | null> {
    return this.prisma.movies.findUnique({
      where: moviesWhereUniqueInput,
    });
  }

  async findMany(): Promise<Movies[]> {
    return this.prisma.movies.findMany();
  }

  async create(data: CreateMoviesDto): Promise<Movies> {
    return this.prisma.movies.create({
      data,
    });
  }

  async update(params: {
    where: { id: number };
    data: UpdateMoviesDto;
  }): Promise<Movies> {
    const { data, where } = params;
    return this.prisma.movies.update({
      data,
      where,
    });
  }

  async delete(where: { id: number }): Promise<Movies> {
    return this.prisma.movies.delete({
      where,
    });
  }
}
