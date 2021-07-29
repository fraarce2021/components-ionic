import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<any>;
  publisher: string = '';

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.heroes = this._dataService.getHeroes();
  }

  segmentChanged(event:any){
    this.publisher = event.detail.value;
  }

}
