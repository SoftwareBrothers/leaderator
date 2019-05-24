import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailVerifyDto } from './email-verify.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('verify')
  verify(@Query() emailVerifyDto: EmailVerifyDto) {
    return this.emailService.verify(emailVerifyDto);
  }
}
