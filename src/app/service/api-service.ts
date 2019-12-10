import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { User } from './user';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 apiURL = 'https://twocan-zuul.us-east-2.elasticbeanstalk.com'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  // getAllUsers():Observable<user>{
  //   return this.http.get<user>(this.apiURL + '/users/getAll')
  //   // .pipe(retry(1)
    
  //   // )


  // }
  // deleteUser(id){
  //  return this.http.delete<user>(this.apiURL + '/users/' + id,this.httpOptions).pipe(
  //    retry(1),
  //    catchError(this.handleError)
  //  )
  // }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
