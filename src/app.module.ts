import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from './config/config.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProspectController} from "./prospect/prospect.controller";
import {ProspectModule} from "./prospect/prospect.module";


@Module({
    imports: [
        ConfigModule,
        UserModule,
        AuthModule,
        TypeOrmModule.forRoot(),
        ProspectModule,
    ],
    controllers: [AppController, ProspectController],
})
export class AppModule {
}
