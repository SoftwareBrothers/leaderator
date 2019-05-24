import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';
import {ProspectController} from "./prospect.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Prospect])],
  providers: [ProspectService],
  exports: [ProspectService],
  controllers: [ProspectController],
})
export class ProspectModule {}
