import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';//add http module
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  public loggedin = new Subject<boolean>();
  public loggedinObserver = this.loggedin.asObservable();

  public base_url = 'http://localhost:3000/'

  constructor(private http:Http) { }

  post(url, creds){
    let header = new Headers();
    header.append('Content-type', 'application/json' );

    return this.http.post(url, creds, {headers:header})
        .map((response: Response) => 
            response.json())      

  }
  get(url){
    let header = new Headers
    header.append('Content-type', 'application/json' );

    return this.http.get(url, {headers: header})
        .map((response : Response) =>
            response.json())

  }

}
