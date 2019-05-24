import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProspectModule} from './prospect/prospect.module';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';
import ormconfig from './config/orm.config';

@Module({
    imports: [
        ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
        UserModule,
        AuthModule,
        TypeOrmModule.forRoot(ormconfig),
        ProspectModule,
    ],
    controllers: [AppController],
})
export class AppModule {
}
