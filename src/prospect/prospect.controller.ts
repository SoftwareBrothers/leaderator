import { Controller, Get } from '@nestjs/common';

@Controller('prospect')
export class ProspectController {

  @Get('domain/verify')
  verifyDomain(): string {
    return 'This action returns all cats';
  }

}
