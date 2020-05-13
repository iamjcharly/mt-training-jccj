import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private url = 'https://api.jsonbin.io/b/5ebc3ea2a47fdd6af162b425/2';

  constructor(private http: HttpClient){}

  getAllFarms(){
    return this.http.get(this.url)
      .pipe(map((response: any) => response.results));
  }
}

