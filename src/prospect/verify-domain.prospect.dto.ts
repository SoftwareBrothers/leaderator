import { IsNotEmpty } from 'class-validator';

export class VerifyDomainDto {
  @IsNotEmpty()
  readonly domain: string;
}
