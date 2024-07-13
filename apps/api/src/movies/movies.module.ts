import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import * as schema from '../../db/schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DrizzlePGModule.register({
      tag: 'DB_PROD',
      pg: {
        connection: 'client',
        config: {
          connectionString: process.env.DATABASE_URL,
        },
      },
      config: { schema: { ...schema } },
    }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
