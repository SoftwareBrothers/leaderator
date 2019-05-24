import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';
import { ProspectController } from './prospect.controller';
import { ReplayIoModule } from './replay-io/replay-io.module';
import { ReplayIoService } from './replay-io/replay-io.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prospect]), ReplayIoModule],
  providers: [ProspectService, ReplayIoService],
  exports: [ProspectService],
  controllers: [ProspectController],
})
export class ProspectModule {}
