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
          mode:'cors',
            headers : {
              'Access-Control-Request-Headers':  'Content-Type',
              'Content-type':'application/json; charset=UTF-8',
              'Access-Control-Request-Method': '*',
              'Access-Control-Allow-Origin': '*'
            }
        }
        return this.http.post(apiEndPoints.userLogin,form,options);
       
    }

  

}