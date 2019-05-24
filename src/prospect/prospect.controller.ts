import {Controller, Get, HttpException, HttpStatus, Query} from '@nestjs/common';
import {ProspectService} from './prospect.service';
import {VerifyDomainDto} from './verifyDomain.prospect.dto';
import {ReplayIoService} from './replay-io/replay-io.service';
import {map} from 'rxjs/operators';

@Controller('prospect')
export class ProspectController {

    constructor(
        private readonly prospectService: ProspectService,
        private readonly replayIoService: ReplayIoService,
    ) {
    }

    @Get('domain/verify')
    verifyDomain(@Query() verifyDomainDto: VerifyDomainDto): Promise<any> {

        return this.prospectService.findByDomain(verifyDomainDto.domain).then(prospectObject => {
            if (prospectObject) {
                throw new HttpException('Already exists in database', HttpStatus.UNPROCESSABLE_ENTITY);
            }

            return;
        });
    }

    @Get('list')
    async list(): Promise<any> {
        return this.replayIoService.listContacts().pipe(
            map(response => response.data),
        );
    }

}
