import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { EmailVerifyDto } from './email-verify.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Prospect} from '../prospect/prospect.entity';
import {Repository} from 'typeorm';
import {VerifyService} from '../verify/verify.service';

@Injectable()
export class EmailService {
    private readonly emailActionCorrect = 250;
    private readonly responseOk = 1;

    constructor(
        @InjectRepository(Prospect) private prospectRepository: Repository<Prospect>,
        private readonly verifyService: VerifyService,
    ) {}

    verify(emailVerifyDto: EmailVerifyDto): Promise<any> {
        const prospectObject = this.prospectRepository.find({email: emailVerifyDto.email});

        prospectObject.then((value) => {
            if (value === []) {
                throw new HttpException('already added', HttpStatus.CONFLICT);
            }
        });

        return this.verifyService.validate(emailVerifyDto.email).then(
            response => {
                response.toPromise().then(data => {
                    const body = data.data;

                    if (
                        body.status === this.responseOk
                        && body.smtp_code === this.emailActionCorrect
                    ) {
                        throw new HttpException('Email is valid', HttpStatus.OK);
                    } else {
                        throw new HttpException('Email is not valid', HttpStatus.NOT_FOUND);
                    }
                });
            },
        );
    }
}
