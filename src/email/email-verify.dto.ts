import { IsEmail } from 'class-validator';

export class EmailVerifyDto {
  @IsEmail()
  email: string;
}
