import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { 
    if(sessionStorage.getItem("token")!=null){
      this.router.navigate(["/list"]);
    }
    this.thumbsDownPath  = "./assets/thumbs-down.svg";
    this.errorHeader = "An error has occured";
    this.emailPatternErrorMessage = "Email field must contain a valid email";
    
  }

  ngOnInit(): void {
    
  }

  public thumbsDownPath :string ;
  public errorHeader: string ;
  public emailPatternErrorMessage: string ;
  public alertTypeDanger : string = "danger";
  public alertNotDismissible : boolean = false;
  public toastIsVisible : boolean = false;
  public toastBackGroundColor : string = '';
  public loginErrorMessage:string = '';

  onFormPost(form:NgForm){
    if(form.status == "VALID"){
      this.userService.login(form.form.value).subscribe({
        next:(response:any)=>{
          sessionStorage.setItem("token",response.accessToken)
          this.router.navigate(["/list"])
        },
        error: error=>{
          if(error.status == 400 || error.status == 401){
            this.loginErrorMessage = "Wrong or missing credentials, check your email/password"
          }else if (error.status == 500){
            this.loginErrorMessage = "Internal server error"
          }
          this.toastIsVisible = true;
          this.toastBackGroundColor = "#F5C2C7"
         
        },
        complete:()=>{

        }
      })
    }else{
    
    }
  }

  setToastIsVisible(status:boolean){
    this.toastIsVisible = status
  }
}
