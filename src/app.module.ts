import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from './config/config.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigService} from './config/config.service';

@Module({
    imports: [
        ConfigModule,
        UserModule,
        AuthModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => config.getDB(__dirname),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
})
export class AppModule {
}
