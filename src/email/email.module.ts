import { Module } from '@nestjs/common';
import {EmailController} from './email.controller';
import {EmailService} from './email.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Prospect} from '../prospect/prospect.entity';
import {VerifyService} from '../verify/verify.service';
import {VerifyModule} from '../verify/verify.module';
import {ResponseFactory} from '../verify/response.factory';

@Module({
    imports: [
        VerifyModule,
        TypeOrmModule.forFeature([Prospect]),
    ],
    controllers: [EmailController],
    providers: [EmailService, VerifyService, ResponseFactory],
    exports: [EmailService, ResponseFactory],
})
export class EmailModule {}
