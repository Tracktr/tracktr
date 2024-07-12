import { IsNotEmpty, IsString } from 'class-validator';

export class signInDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
