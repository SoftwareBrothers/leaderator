import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Body,
} from '@nestjs/common';
import { ProspectService } from './prospect.service';
import { VerifyDomainDto } from './verify-domain.prospect.dto';
import { CreateProspectDto } from './create.prospect.dto';

@Controller('prospects')
export class ProspectController {
  constructor(private readonly prospectService: ProspectService) {}

  @Post()
  store(@Body() createProspectDto: CreateProspectDto): Promise<any> {
    console.log('controller');
    console.log(createProspectDto);
    return this.prospectService.store(createProspectDto);
  }

  @Get('domain/verify')
  verifyDomain(@Query() verifyDomainDto: VerifyDomainDto): Promise<any> {
    return this.prospectService
      .verifyDomain(verifyDomainDto.domain)
      .then(prospectObject => {
        if (prospectObject) {
          throw new HttpException(
            'Already exists in database',
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }

        return;
      });
  }
}
