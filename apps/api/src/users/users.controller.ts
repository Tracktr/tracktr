import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUsersDto) {
    return this.usersService.create(data);
  }

  @Get()
  findAll() {
    return this.usersService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') username: string) {
    return this.usersService.findFirst(username);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateUsersDto) {
    return this.usersService.update({
      id,
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
