import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';
import { ProspectController } from './prospect.controller';
import { ReplayIoModule } from './reply-io/reply-io.module';
import { ReplayIoService } from './reply-io/reply-io.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prospect]), ReplayIoModule],
  providers: [ProspectService, ReplayIoService],
  exports: [ProspectService],
  controllers: [ProspectController],
})
export class ProspectModule {}
