import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMoviesDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  poster?: string;

  @IsOptional()
  @IsNumber()
  year?: number;
}
