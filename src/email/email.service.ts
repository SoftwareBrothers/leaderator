import { Injectable } from '@nestjs/common';
import { EmailVerifyDto } from './email-verify.dto';

@Injectable()
export class EmailService {
    verify(emailVerifyDto: EmailVerifyDto): EmailVerifyDto {
        return emailVerifyDto;
    }
}
