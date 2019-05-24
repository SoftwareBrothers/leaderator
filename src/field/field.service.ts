import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';
import { Title } from './title.entity';

@Injectable()
export class FieldService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
    @InjectRepository(Country) private countryRepository: Repository<Country>,
    @InjectRepository(Title) private titleRepository: Repository<Title>,
  ) {}

  async get(): Promise<any> {

    const titles = await this.titleRepository.find();
    const countries = await this.countryRepository.find();
    const cities = await this.cityRepository.find();

    return {
      titles,
      countries,
      cities
    };

  }

}
