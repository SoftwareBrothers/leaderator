import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';
import { ProspectController } from './prospect.controller';
import { ReplyIoModule } from './reply-io/reply-io.module';
import { ReplyIoService } from './reply-io/reply-io.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prospect]), ReplyIoModule],
  providers: [ProspectService, ReplyIoService],
  exports: [ProspectService],
  controllers: [ProspectController],
})
export class ProspectModule {}
