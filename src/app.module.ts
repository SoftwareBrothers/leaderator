import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainController } from './domain/domain.controller';
import { DomainService } from './domain/domain.service';

@Module({
  imports: [],
  controllers: [AppController, DomainController],
  providers: [AppService, DomainService],
})
export class AppModule {}
