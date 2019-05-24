import {HttpModule, Module} from '@nestjs/common';
import {VerifyService} from './verify.service';

@Module({
  imports: [HttpModule],
  providers: [VerifyService],
  exports: [VerifyService],
})
export class VerifyModule {}
