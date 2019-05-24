import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProspectController } from './prospect/prospect.controller';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { ProspectModule } from './prospect/prospect.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    ProspectModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'datdbabase.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
  ],
  controllers: [AppController, ProspectController],
})
export class AppModule {}
