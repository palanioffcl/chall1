import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "http://localhost:8000"

  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this._http.get(`${this.API_URL}`+"/getall")
  }
}
