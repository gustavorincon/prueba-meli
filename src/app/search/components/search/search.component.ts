import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() changeSearch: EventEmitter<string> = new EventEmitter();
  @Input() searchValue = '';


  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  search(){
    if (!!this.searchValue){
      this.changeSearch.emit(this.searchValue);
    }
  }

}
