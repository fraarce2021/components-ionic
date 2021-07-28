import { ViewFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters: string[] = ['Aquaman', 'Batman','Ace','Luffy','Zoro', 'Chopper']

  toggle:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){

    const characterMoved = this.characters.splice(event.detail.from, 1)[0];

    this.characters.splice(event.detail.to, 0, characterMoved);

    event.detail.complete();

    console.log(this.characters);
  }

  onToggle(){
    this.toggle = !this.toggle;
  }
}
