import { IsNotEmpty } from 'class-validator';

export class CreateProspectDto {
  readonly vip: boolean;

  @IsNotEmpty()
  readonly firstName: string;

  readonly secondName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  readonly company: string;

  readonly domain: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly gender: number;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly country: string;

  @IsNotEmpty()
  readonly city: string;

  readonly address: string;

  @IsNotEmpty()
  readonly foundOn: string;

  readonly note: string;
}
