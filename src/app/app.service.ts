import { urlBase } from './const';
import { Injectable } from '@angular/core';
import { Headers, URLSearchParams, Http } from '@angular/http';
import { Post } from "./Post"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EjemploService {

    private url = urlBase;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    listar(): Promise<Post[]> {
        return this.http.get(`${this.url}/posts`)
            .toPromise().then(response => response.json() as Post[]);
    }


}
