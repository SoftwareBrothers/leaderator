import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AxiosResponse} from 'axios';

@Injectable()
export class ReplayIoService {
    constructor(private readonly httpService: HttpService) {
    }

    listContacts(): Observable<AxiosResponse> {
        return this.httpService.get('/people');
    }
}
