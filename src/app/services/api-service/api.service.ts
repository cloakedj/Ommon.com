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
    //Get all the Events for a user
    getEventsForUser(){
      return this.http.get(`${this.API_URL}/events/all`)
      .pipe(
        catchError(this.handleError)
      )
    }
  //Add A New Competition
  postNewCompetition(data : any){
    let formData = new FormData();
    Object.keys(data).forEach((key)=>{
      formData.append(key,data[key]);
    })
    return this.http.post(`${this.API_URL}/comps/add`,formData)
    .pipe(
      catchError(this.handleError)
    )
  }
    //Add A New Event
    postNewEvent(data : any){
      let formData = new FormData();
      Object.keys(data).forEach((key)=>{
        formData.append(key,data[key]);
      })
      return this.http.post(`${this.API_URL}/events/add`,formData)
      .pipe(
        catchError(this.handleError)
      )
    }
  //Add A New User
  createNewUser(data : any){
    let formData = new FormData();
    Object.keys(data).forEach((key)=>{
      formData.append(key,data[key]);
    });
    return this.http.post(`${this.API_URL}/users/register`,formData)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Fetch All Details of a competition
  fetchCompetitionDetails(id : String){ 
    return this.http.get(`${this.API_URL}/comps/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Fetch All Details of an Event
  fetchEventDetails(id : any){ 
    return this.http.get(`${this.API_URL}/events/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Fetch Timeline Details for a user
  fetchTimelineDetails(id : string){ 
    return this.http.get(`${this.API_URL}/users/timeline/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Attend A Competition
  attendCompetition(id : string){
    return this.http.get(`${this.API_URL}/comps/attend/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Log Out
  logUserOut(){
    return this.http.get(`${this.API_URL}/users/logout`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Attend events
  attendEvent(id : string){
    return this.http.get(`${this.API_URL}/events/attend/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //get user details
  getUserDetails(id : string){
    return this.http.get(`${this.API_URL}/users/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  //Build a tie
  buildATie(id : string){
    return this.http.get(`${this.API_URL}/users/add-tie/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
    //Cut the tie
    cutTheTie(id : string){
      return this.http.get(`${this.API_URL}/users/remove-tie/${id}`)
      .pipe(
        catchError(this.handleError)
      )
    }
    //Event Interested
    addOneToInterested(id : string){
      return this.http.get(`${this.API_URL}/events/interested/${id}`)
      .pipe(
        catchError(this.handleError)
      )
    }
    //My Events
    getMyEvents(){
      return this.http.get(`${this.API_URL}/users/myEvents`)
      .pipe(
        catchError(this.handleError)
      )
    }
    //My Ties
    getMyTies(){
      return this.http.get(`${this.API_URL}/users/ties`)
      .pipe(
        catchError(this.handleError)
      )
    }
}
