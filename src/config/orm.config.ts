import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST || 'db',
  port: +process.env.TYPEORM_PORT || 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../**/**.entity{.ts,.js}'],
  migrations: [
    __dirname + '/../migration/*{.ts,.js}',
    __dirname + '/src/migration/*{.ts,.js}',
  ],
  synchronize: false,
};

export default config;
