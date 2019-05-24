import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Prospect} from '../prospect.entity';

@Injectable()
export class ReplayIoService {
    constructor(private readonly httpService: HttpService) {
    }

    listContacts(): Observable<Prospect[]> {
        return this.httpService.get('/people').pipe(
            map(response => response.data),
        );
    }

    create() {
    }
}
