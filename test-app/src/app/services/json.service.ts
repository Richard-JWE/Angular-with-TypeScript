import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JsonService {

    constructor(private http: HttpClient) { }

    getRemoteData(): Observable<any> {
        return this.http.get('https://jsonblob.com/api/jsonBlob/eec48e46-00b9-11ea-b2fd-fbc4f17b99a9')
    }

}