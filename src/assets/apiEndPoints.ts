

export class apiEndPoints {

    static baseUrl: string = "http://77.141.101.84:8080/";

    static alertBaseUrl: string = apiEndPoints.baseUrl + "alert/";

    static userLogin: string = apiEndPoints.baseUrl + "auth/login";

    static getAllAlert: string = apiEndPoints.alertBaseUrl;

    static fixAlert : string = apiEndPoints.alertBaseUrl + "fix";

    static deleteAlert : string = apiEndPoints.alertBaseUrl + "delete";
}