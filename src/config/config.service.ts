import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    getSecretToken(): string {
        return this.get('SECRET_KEY');
    }

    getDB(dir: string): object {
        return {
            type: this.get('TYPEORM_CONNECTION') || 'mysql',
            host: this.get('TYPEORM_HOST') || 'localhost',
            port: this.get('TYPEORM_PORT') || 3306,
            username: this.get('TYPEORM_USERNAME'),
            password: this.get('TYPEORM_PASSWORD'),
            database: this.get('TYPEORM_DATABASE'),
            entities: [dir + '/**/*.entity{.ts,.js}'],
            synchronize: this.get('TYPEORM_SYNCHRONIZE'),
        };
    }

}
