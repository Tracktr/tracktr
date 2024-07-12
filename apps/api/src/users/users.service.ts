import { Inject, Injectable } from '@nestjs/common';

import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import * as schema from '../../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DB_PROD') private drizzleProd: NodePgDatabase<typeof schema>,
  ) {}

  async findFirst(username: string) {
    return await this.drizzleProd.query.users.findFirst({
      where: eq(schema.users.username, username),
    });
  }

  async findMany() {
    return await this.drizzleProd.query.users.findMany();
  }

  async create(data: CreateUsersDto) {
    return await this.drizzleProd.insert(schema.users).values(data).returning();
  }

  async update({
    id,
    data,
  }: {
    id: number;
    data: UpdateUsersDto;
  }): Promise<Users[]> {
    data.id = id;

    return await this.drizzleProd
      .update(schema.users)
      .set(data)
      .where(eq(schema.users.id, id))
      .returning();
  }

  async delete(id: number): Promise<Users[]> {
    await this.drizzleProd.delete(schema.users).where(eq(schema.users.id, id));

    return;
  }
}
