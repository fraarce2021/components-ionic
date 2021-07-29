import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums:any =[];
  searchText: string = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAlbums()
    .subscribe(albums => this.albums = albums)
  }

  onSearchChange(event){
    this.searchText = event.detail.value;
  }
}
