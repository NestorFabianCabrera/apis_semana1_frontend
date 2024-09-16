import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { JsonUsers } from "../interface/jsonusers";

@Injectable({
  providedIn: 'root'
})

export class JsonApiService {
  private apiJsonUrl : string = environment.apiJsonUrl;
  constructor(private http: HttpClient) { }

  getJsonUsers(): Observable<JsonUsers[]> {
    return this.http.get<JsonUsers[]>(this.apiJsonUrl);
  }

  saveUser(user: { name: string; email: string }): Observable<JsonUsers> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<JsonUsers>(this.apiJsonUrl, user, { headers });
  }
}
