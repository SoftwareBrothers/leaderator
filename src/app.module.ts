import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmailController } from './email/email.controller';
import { AppService } from './app.service';
import { EmailService } from './email/email.service';

@Module({
  imports: [],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
