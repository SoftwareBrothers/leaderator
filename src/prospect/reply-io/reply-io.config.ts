import {HttpModuleOptions, HttpModuleOptionsFactory, Injectable} from '@nestjs/common';
import {ConfigService} from 'nestjs-config';

@Injectable()
export class ReplyIoConfig implements HttpModuleOptionsFactory {

    constructor(private readonly config: ConfigService) {
    }

    createHttpOptions(): HttpModuleOptions {
        return {
            baseURL: this.config.get('axios.replayIoUrl'),
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.config.get('axios.replayIoSecret'),
            },
        };
    }
}
