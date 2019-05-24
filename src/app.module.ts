import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from './config/config.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule,
        UserModule,
        AuthModule,
        TypeOrmModule.forRoot(),
    ],
    controllers: [
        AppController,
    ],
})
export class AppModule {
}
