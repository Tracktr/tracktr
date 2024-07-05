import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { Movies, Prisma } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    moviesWhereUniqueInput: Prisma.MoviesWhereUniqueInput,
  ): Promise<Movies | null> {
    return this.prisma.movies.findUnique({
      where: moviesWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MoviesWhereUniqueInput;
    where?: Prisma.MoviesWhereInput;
    orderBy?: Prisma.MoviesOrderByWithRelationInput;
  }): Promise<Movies[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.movies.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.MoviesCreateInput): Promise<Movies> {
    return this.prisma.movies.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.MoviesWhereUniqueInput;
    data: Prisma.MoviesUpdateInput;
  }): Promise<Movies> {
    const { data, where } = params;
    return this.prisma.movies.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.MoviesWhereUniqueInput): Promise<Movies> {
    return this.prisma.movies.delete({
      where,
    });
  }
}
