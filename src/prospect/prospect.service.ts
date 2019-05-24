import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';

@Injectable()
export class ProspectService {
  constructor(
    @InjectRepository(Prospect) private prospectRepository: Repository<Prospect>,
  ) {}

  async findByDomain(domain: string): Promise<Prospect> {
    return await this.prospectRepository.findOne({
      where: {
        domain: domain,
      },
    });
  }
}
