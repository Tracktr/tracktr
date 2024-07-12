import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMoviesDto {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  poster?: string;

  @IsOptional()
  @IsNumber()
  year?: number;
}
