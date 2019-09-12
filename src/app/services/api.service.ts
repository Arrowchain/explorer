import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = '/api';

  constructor(private httpClient: HttpClient) {
    if (!environment.production) {
      this.apiUrl = '//localhost:8080/api'
    }
  }

  public getBlock(id: string | number) {
    return this.httpClient.get(`${this.apiUrl}/block/${id}`)
  }

  public getTx(id: string) {
    return this.httpClient.get(`${this.apiUrl}/tx/${id}`)
  }
}
