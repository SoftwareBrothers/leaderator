import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { CreateProspectDto } from './create.prospect.dto';

@Injectable()
export class ProspectService {
  constructor(
    @InjectRepository(Prospect)
    private prospectRepository: Repository<Prospect>,
  ) {}

  async store(createProspectDto: CreateProspectDto): Promise<Prospect> {
    // new Prospect({
    //   firstName: createProspectDto.firstName
    // });

    console.log(createProspectDto);
    return await this.prospectRepository.save(createProspectDto);
  }

  async verifyDomain(domain: string): Promise<Prospect> {
    domain = domain.replace(/^(http(s)?:\/\/)/gi, '');

    return await this.prospectRepository.findOne({
      where: {
        domain: domain,
      },
    });
  }
}
