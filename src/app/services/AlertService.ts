import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiEndPoints } from "src/assets/apiEndPoints";
import { fullAlert } from "../Interfaces/alertInterface";


@Injectable()
export class AlertService{

    constructor(private http:HttpClient){

    }

    getAllAlert():Observable<any>{
        const token = sessionStorage.getItem('token')
        const options = {
            mode:'no-cors',
              headers : {
               'Authorization':`Bearer ${token} `
              }
          }
        return this.http.get(apiEndPoints.getAllAlert,options);
    }

    fixAlertUpdate(alert:fullAlert):Observable<any>{
        const token = sessionStorage.getItem('token')
        const options = {
            mode:'no-cors',
              headers : {
               'Authorization':`Bearer ${token} `
              }
          }
        return this.http.post(apiEndPoints.fixAlert,alert,options);
    }

    deleteAlert(alert:fullAlert):Observable<any>{
        const token = sessionStorage.getItem('token')
        const options = {
            mode:'no-cors',
              headers : {
               'Authorization':`Bearer ${token} `
              }
          }
        return this.http.post(apiEndPoints.deleteAlert,alert,options);
    }
}