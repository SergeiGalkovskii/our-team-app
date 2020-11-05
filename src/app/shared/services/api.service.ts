import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RequestResponse } from 'src/app/shared/types';
import { OurTeamBlock } from 'src/app/main/main.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getOurTeamData() {
    return this.http.get<RequestResponse<OurTeamBlock>>(`${this.apiUrl}/task/index.json`).
      pipe(
        catchError(err => of({
          data: null,
          error: 'Something went wrong! Try again'
        }))
      );
  }
}
