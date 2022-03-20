import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) { }

  getCodeResults(code: string | number): Observable<any>{
    return this.http.get(`${environment.restApiUrl}/code/${code}`);
  }
}
