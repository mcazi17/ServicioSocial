import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
/*
* Uses Injected HTTP service in order to find files and return them as usable data objects
*/
export class DataFinder {
    private url = "../../assets/data/items.data.json";
    
    constructor(private http: Http) {
    }
    /* 
        Gets data with a promise which will return with the data when the task is complete
        Uses generic type T to define schema interface to ensure returning json matches schema template.
     */
    
     public getJSONDataAsync(): Observable<any> {
        let data: Observable<any>;
        data = this.http.get(this.url).map(res => res.json());
        return data;
     }

}