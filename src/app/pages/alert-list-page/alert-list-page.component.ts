import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/AlertService';
import { fullAlert } from '../../Interfaces/alertInterface'



@Component({
  selector: 'app-alert-list-page',
  templateUrl: './alert-list-page.component.html',
  styleUrls: ['./alert-list-page.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AlertListPageComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize!: number;
  alertes!: fullAlert[];
  alertesFromServer!: fullAlert[];
  public isCollapsed = false;
  currentAlert: fullAlert = {
    id: undefined,
    cause: "",
    description: "",
    date: "",
    time: "",
    location: "",
    picture: "",
    name: "",
    firstname: "",
    userAdress: "",
    userZipcode: "",
    city: "",
    phoneNumber: "",
    fix: false,
    createdAt: "",
    updatedAt: "",
    updatedBy: ""
  };

  alertToDelete: fullAlert = {
    id: undefined,
    cause: "",
    description: "",
    date: "",
    time: "",
    location: "",
    picture: "",
    name: "",
    firstname: "",
    userAdress: "",
    userZipcode: "",
    city: "",
    phoneNumber: "",
    fix: false,
    createdAt: "",
    updatedAt: "",
    updatedBy: ""
  };

  toastIsVisible: boolean = false;
  toastBackGroundColor!: string;
  message!: string;
  svgPath!: string;
  header!: string;

  modalIsVisible:boolean = false;

  constructor(private router: Router, private alertService: AlertService,config: NgbModalConfig, private modalService: NgbModal) {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['/unauthorized'])
    }
    this.alertService.getAllAlert().subscribe({
      next: (response) => {
        this.alertesFromServer = response;
        this.collectionSize = this.alertesFromServer.length;
      },
      error: error => {
        if (error.status == 401) {
          this.router.navigate(['/unauthorized'])
        }

      },
      complete: () => {

      }
    })
    config.backdrop = 'static';
    config.keyboard = false;

  }

  refreshAlertes() {
    this.alertesFromServer = this.alertesFromServer
      .map((alerte, i) => ({ id: i + 1, ...alerte }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {

  }



  open(htmlElement: HTMLElement, alert: fullAlert) {

    this.setCurrentAlert(alert);
    if (!this.isCollapsed) {
      this.isCollapsed = true;
      htmlElement.animate([
        {
          opacity: 0,
          marginLeft: "-100%"
        },
        {
          opacity: 1,
          marginLeft: "0"
        }], 900)
    }
  }

  close() {
    this.isCollapsed = false;
  }

  setCurrentAlert(alert: fullAlert) {
    this.currentAlert = alert;
  }

  getSwitch(htmlInput: HTMLDivElement, alert: fullAlert) {
    alert.fix = htmlInput.getElementsByTagName('input')[0].checked;
    this.alertService.fixAlertUpdate(alert).subscribe({
      next: (response) => {
        this.header = "SUCCESS";
        this.toastBackGroundColor = "#56b03e";
        this.svgPath = "./assets/thumbs-up.svg";
        this.message = "This alert has been successfuly updated";
        this.toastIsVisible = true;
        setTimeout(() => {
          this.toastIsVisible = false;
        }, 2000)
      },
      error: error => {
        this.header = "Something went wrong...";
        this.toastBackGroundColor = "#F5C2C7";
        this.svgPath = "./assets/thumbs-down.svg";
        this.message = "This alert could'nt be updated";
        this.toastIsVisible = true;
      },
      complete: () => {

      }
    })
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(["/"]);
  }

  setToastIsVisible(status: boolean) {
    this.toastIsVisible = status;
  }

  openModal(content: any,alert:fullAlert) {
    this.alertToDelete = alert;
    this.modalService.open(content);
  }
  
  deleteAlerte() {
    
    this.alertService.deleteAlert(this.alertToDelete).subscribe({
      next: (response) => {
        this.header = "SUCCESS";
        this.toastBackGroundColor = "#56b03e";
        this.svgPath = "./assets/thumbs-up.svg";
        this.message = "This alert has been successfuly deleted";
        this.toastIsVisible = true;
        setTimeout(() => {
          this.toastIsVisible = false;
        }, 2000)
      },
      error: error => {
        if(error.status == 200){
          this.header = "SUCCESS";
          this.toastBackGroundColor = "#56b03e";
          this.svgPath = "./assets/thumbs-up.svg";
          this.message = "This alert has been successfuly deleted";
          this.toastIsVisible = true;
          setTimeout(() => {
            this.toastIsVisible = false;
          }, 2000)
        }else{
          this.header = "Something went wrong...";
          this.toastBackGroundColor = "#F5C2C7";
          this.svgPath = "./assets/thumbs-down.svg";
          this.message = "This alert could'nt be deleted";
          this.toastIsVisible = true;
        }
        this.refreshAlertes();
        
      },
      complete: () => {

      }
    })
  }
}
