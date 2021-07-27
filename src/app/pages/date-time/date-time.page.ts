import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [
      {
        text:'Hello',
        handler: (event) => {
        console.log(event)
        }
      },
      {
        text:'World'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  changeDate(event: any){
    console.log(event.detail.value)
  }
}
