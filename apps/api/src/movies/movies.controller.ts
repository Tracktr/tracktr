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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateMoviesDto } from 'src/generated/nestjs-dto/create-movies.dto';
import { UpdateMoviesDto } from 'src/generated/nestjs-dto/update-movies.dto';

@Controller('movies')
@ApiTags('Movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create movie' })
  create(@Body() data: CreateMoviesDto) {
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
  update(@Param('id') id: number, @Body() data: UpdateMoviesDto) {
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
