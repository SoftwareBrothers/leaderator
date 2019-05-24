import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Prospect} from '../prospect.entity';

@Injectable()
export class ReplyIoService {
    constructor(private readonly http: HttpService) {
    }

    listContacts(): Observable<Prospect[]> {
        return this.http.get('/people').pipe(
            map(response => response.data),
        );
    }

    async create(prospect: Prospect) {
        try {
           await this.http.post('/people', {prospect});
        } catch (e) {
            throw new Error('');
        }
    }
}
