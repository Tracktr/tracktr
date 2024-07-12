import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsDate()
  signUpDate: Date;
}
