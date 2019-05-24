import {Controller, Get, HttpException, HttpStatus, Query} from '@nestjs/common';
import { ProspectService } from './prospect.service';
import {VerifyDomainDto} from "./verifyDomain.prospect.dto";

@Controller('prospect')
export class ProspectController {

  constructor(private readonly prospectService: ProspectService) {}

  @Get('domain/verify')
  verifyDomain(@Query() verifyDomainDto: VerifyDomainDto): Promise<any> {

    return this.prospectService.verifyDomain(verifyDomainDto.domain).then(prospectObject => {
      if (prospectObject) {
        throw new HttpException('Already exists in database', HttpStatus.UNPROCESSABLE_ENTITY);
      }

      return;
    });
  }

}
