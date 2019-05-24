import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProspectModule } from './prospect/prospect.module';
import { FieldModule } from './field/field.module';
import { BullQueueModule } from './bull-queue/bull-queue.module';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(),
    ProspectModule,
    FieldModule,
    // BullQueueModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
