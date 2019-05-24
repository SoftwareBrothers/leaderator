import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from './config/config.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigService} from './config/config.service';
import {EmailController} from './email/email.controller';
import {AppService} from '../nest/src/app.service';
import {EmailModule} from './email/email.module';
import {VerifyModule} from './verify/verify.module';

@Module({
    imports: [
        ConfigModule,
        UserModule,
        AuthModule,
        EmailModule,
        VerifyModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => config.getDB(__dirname),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController, EmailController],
    providers: [AppService],
})
export class AppModule {
}
