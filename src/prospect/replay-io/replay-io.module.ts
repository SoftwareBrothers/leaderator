import {HttpModule, Module} from '@nestjs/common';
import { ReplayIoService } from './replay-io.service';
import {ReplayIoConfig} from './replay-io.config';

@Module({
  imports: [HttpModule.registerAsync({
    useClass: ReplayIoConfig,
  })],
  providers: [ReplayIoService],
})
export class ReplayIoModule {}
