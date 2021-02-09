import { Component, EventEmitter,Input, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output('searchT') myEvent = new EventEmitter();
  searchT(e) {
    //console.log(e.target.value)
    this.myEvent.emit(e.target.value)
  }
}
