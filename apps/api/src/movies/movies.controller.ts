import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags } from '@nestjs/swagger';
import { Movies } from '@prisma/client';

@Controller('movies')
@ApiTags('Movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() data: Movies) {
    return this.moviesService.create(data);
  }

  @Get()
  findAll() {
    return this.moviesService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.moviesService.findUnique({ id });
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Movies) {
    return this.moviesService.update({
      where: { id: id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.delete({ id });
  }
}
