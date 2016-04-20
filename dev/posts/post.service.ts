/**
 * Created by Bala on 4/20/2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){

    }

    getPosts(){
        return this._http.get(this._url)
            .map(res => res.json());
    }
}
