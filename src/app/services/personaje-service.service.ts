import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Character } from "../interface/character";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl : string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<{ results: Character[] }> {
    const endpoint = "character";
    return this.http.get<{ results: Character[] }>(this.apiUrl + endpoint);
  }
}
