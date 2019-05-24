import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prospect])],
  providers: [ProspectService],
  exports: [ProspectService],
})
export class ProspectModule {}
