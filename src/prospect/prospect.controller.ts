import {CreateProspectDto} from './create.prospect.dto';
import {Controller, Get, Post, HttpException, HttpStatus, Query} from '@nestjs/common';
import {ProspectService} from './prospect.service';
import {VerifyDomainDto} from './verify-domain.prospect.dto';
import {ReplyIoService} from './reply-io/reply-io.service';

@Controller('prospects')
export class ProspectController {
    constructor(
        private readonly prospectService: ProspectService,
        private readonly replayIoService: ReplyIoService,
    ) {
    }

    @Post()
    store(@Query() createProspectDto: CreateProspectDto): Promise<any> {
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

    @Get('list')
    async list(): Promise<any> {
        return this.replayIoService.listContacts();
    }

}
