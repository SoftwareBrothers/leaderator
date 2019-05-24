import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';

@Injectable()
export class ProspectService {
  constructor(
    @InjectRepository(Prospect) private prospectRepository: Repository<Prospect>,
  ) {}

  async verifyDomain(domain: string): Promise<Prospect> {

    domain = domain.replace(/^(http(s)?:\/\/)/gi, '');

    return await this.prospectRepository.findOne({
      where: {
        domain: domain,
      },
    });
  }
}
