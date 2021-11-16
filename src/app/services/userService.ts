import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiEndPoints } from "src/assets/apiEndPoints";
import { Login } from "../Interfaces/loginInterface";

@Injectable()
export class UserService{

    constructor(private http:HttpClient){

    }

    login(form:Login):Observable<any>{
        return this.http.post(apiEndPoints.userLogin,form);
    }

}