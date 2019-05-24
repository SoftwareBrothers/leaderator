import {HttpService, Injectable} from '@nestjs/common';

@Injectable()
export class VerifyService {
    readonly apiUrl = 'https://app.verify-email.org/api/v1/6O5rX1FhZXDQ4nxg9v92l8kVTL4YyaPBOIbGg0BI3VrGddwW0b/verify/{email}';

    constructor(private readonly httpService: HttpService) {
    }

    async validate(email: string) {
        return this.httpService.get(this.apiUrl.replace('{email}', email));
    }
}
