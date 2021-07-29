import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { ComponentInterface } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  components: Observable<ComponentInterface[]>;

  constructor(private _dataService:DataService) {}

  ngOnInit(){
    this.components = this._dataService.getMenuOpts();
  }
}
