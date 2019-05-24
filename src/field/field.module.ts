import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';
import { Title } from './title.entity';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';

@Module({
  imports: [TypeOrmModule.forFeature([City, Country, Title])],
  providers: [FieldService],
  exports: [FieldService],
  controllers: [FieldController],
})
export class FieldModule {}
