import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private url = 'http://localhost:8000/api/post';
     
  constructor(private httpClient: HttpClient) { }
  
  read(page:number) {
    return this.httpClient.get(this.url+"?page="+page).pipe(
      map((obj) => obj)
    );
  }
  search(keysearch:string) {
    return this.httpClient.get(this.url+"/search/"+keysearch,).pipe(
      map((obj) => obj)
    );
    }

}