import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'danger',
      selected: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  clickCheck(item:any){
    console.log(item)
  }

  showData(){
    console.log(this.data)
  }

}
