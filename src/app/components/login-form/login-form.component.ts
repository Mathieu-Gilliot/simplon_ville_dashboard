import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.thumbsDownPath  = "./assets/thumbs-down.svg";
    this.errorHeader = "An error has occured";
    this.emailPatternErrorMessage = "Email field must contain a valid email";
    
  }

  ngOnInit(): void {
    console.log(this)
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
          console.log(response)
        },
        error: error=>{
          this.toastIsVisible = true;
          this.toastBackGroundColor = "#F5C2C7"
          if(error.originalError.status == 500){
            this.loginErrorMessage = "Internal server error"
          }else if(error.originalError.status == 401){
            this.loginErrorMessage = "Wrong credentials"
          }else if(error.originalError.status == 404){
            console.log(error)
          }
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
