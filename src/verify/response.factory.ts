import {Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AxiosResponse} from 'axios';

@Injectable()
export class ResponseFactory {
    public create(responseObject: Promise<any>) {
        const res = responseObject.then(response => response );

        console.log(res);
    }
}
