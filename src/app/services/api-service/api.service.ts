import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "http://localhost:3000";
  constructor(
    private http : HttpClient
  ) { }
  //Error Handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  //login
  loginUserToApp(creds : any){
    return this.http.post(`${this.API_URL}/users/login`,creds)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Get all the competitions for a user
  getCompetitionsForUser(){
    return this.http.get(`${this.API_URL}/comps/all`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Add A New Competition
  postNewCompetition(data : any){
    return this.http.post(`${this.API_URL}/comps/add`,data)
    .pipe(
      catchError(this.handleError)
    )
  }
}
