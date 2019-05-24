import {HttpModule, Module} from '@nestjs/common';
import { ReplyIoService } from './reply-io.service';
import {ReplyIoConfig} from './reply-io.config';

@Module({
  imports: [HttpModule.registerAsync({
    useClass: ReplyIoConfig,
  })],
  providers: [ReplyIoService],
})
export class ReplyIoModule {}
