import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import {MatButtonModule} from '@angular/material/button';
import { NgbdToastCustomheaderComponent } from './components/commons/ngbd-toast-customheader/ngbd-toast-customheader.component';
import {CommonModule} from '@angular/common';
import { UserService } from './services/UserService';
import { HttpClientModule } from '@angular/common/http';
import { AlertListPageComponent } from './pages/alert-list-page/alert-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    TitleHeaderComponent,
    NgbdToastCustomheaderComponent,
    AlertListPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
