import {Controller, Get, HttpException, HttpStatus, Query} from '@nestjs/common';
import {EmailService} from './email.service';
import {EmailVerifyDto} from './email-verify.dto';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Get('verify')
    verify(@Query() emailVerifyDto: EmailVerifyDto) {
        try {
            return this.emailService.verify(emailVerifyDto);
        } catch (e) {
            throw new HttpException(e.message, e.status);
        }
    }
}
