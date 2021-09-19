import { Component, Input, OnInit } from '@angular/core';
import { ItemResponse } from 'src/app/shared/responses/item.response';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: ItemResponse|null;

  constructor() { }

  ngOnInit(): void {
  }

}
