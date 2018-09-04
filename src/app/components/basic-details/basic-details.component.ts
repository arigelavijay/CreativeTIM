import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  isCompleted: boolean = false;
  data: any = {};
  constructor() {
    this.data = {
      email: '',
    };
  }

  ngOnInit() {
  }

  onStep1Next(evt: any) {

  }

  onStep2Next(evt: any) {

  }

  onStep3Next(evt: any) {

  }

  onComplete(evt: any) {
    this.isCompleted = true;
  }

}
