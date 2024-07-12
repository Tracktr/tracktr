import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMoviesDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  poster: string;

  @IsOptional()
  @IsNumber()
  year?: number;
}
