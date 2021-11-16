import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiEndPoints } from "src/assets/apiEndPoints";
import { Login } from "../Interfaces/loginInterface";
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable()
export class UserService{

    constructor(private http:HttpClient){

    }

    login(form:Login):Observable<any>{
        const options = {
            mode: "cors",
            headers : {
              'Content-type':'application/json; charset=UTF-8'
            }
        }
        return this.http.post(apiEndPoints.userLogin,form,options);
       
    }

    private errorHandler(err : Response){
     
        if(err.status === 404 ){
          return throwError('ooijoi')
        }else if(err.status === 400){
          return throwError('oijfoijfzoz')
        }else if(err.status === 429){
          return throwError('gfjpiojgpoijgep')
        }else{
          return throwError('jopjgoeijgoeg')
        }
  
      }

}