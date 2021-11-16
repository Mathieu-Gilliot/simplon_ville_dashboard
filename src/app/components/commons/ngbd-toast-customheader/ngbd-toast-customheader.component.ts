import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngbd-toast-customheader',
  templateUrl: './ngbd-toast-customheader.component.html',
  styleUrls: ['./ngbd-toast-customheader.component.css']
})

export class NgbdToastCustomheaderComponent implements OnInit {
  @Input('svgPath') picturePath:string | undefined;
  @Input('header') header:string | undefined;
  @Input('message') message:string | undefined;
  @Input('backGroundColor') backGroundColor:string | undefined;
  @Input('show')show!:boolean;
  @Output() hidden:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  
  ngOnInit(): void {
  }

  onHidden(){
    if(this.show != undefined){
      this.hidden.emit(this.show);
    }
  }
}
