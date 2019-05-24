import {Module} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {JwtModule} from '@nestjs/jwt';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {User} from '../user/user.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from 'nestjs-config';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secretOrPrivateKey: configService.get('jwt.secretKey'),
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([User]),
    ],
    providers: [AuthService, UserService],
    controllers: [AuthController],
})
export class AuthModule {
}
