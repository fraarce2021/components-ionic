import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentInterface } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<ComponentInterface[]>;

  constructor(private menuCtrl:MenuController, private _dataService:DataService){

  }

  ngOnInit(){
    this.components = this._dataService.getMenuOpts();
  }

  showMenu(){
    this.menuCtrl.open();
  }
}
