import {Controller, Get, Query} from '@nestjs/common';
import { ProspectService } from './prospect.service';
import {VerifyDomainDto} from "./verifyDomain.prospect.dto";
import {Prospect} from "./prospect.entity";

@Controller('prospect')
export class ProspectController {

  constructor(private readonly prospectService: ProspectService) {}

  @Get('domain/verify')
  verifyDomain(@Query() verifyDomainDto: VerifyDomainDto): Promise<Prospect> {
    return this.prospectService.findByDomain(verifyDomainDto.domain);
  }

}
