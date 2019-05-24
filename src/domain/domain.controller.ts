import { Controller, Get } from '@nestjs/common';

@Controller('domain')
export class DomainController {

  @Get('verify')
  verify(): string {
    return 'This action returns all cats';
  }

}
