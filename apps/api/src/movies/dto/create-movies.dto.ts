import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMoviesDto {
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
