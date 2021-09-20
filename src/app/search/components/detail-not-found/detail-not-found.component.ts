import { Component, Input, OnInit } from '@angular/core';
import { ErrorText } from 'src/app/shared/enums/error-text.enum';

@Component({
  selector: 'app-detail-not-found',
  templateUrl: './detail-not-found.component.html',
  styleUrls: ['./detail-not-found.component.scss']
})
export class DetailNotFoundComponent implements OnInit {

  @Input() text ? = ErrorText.TEXT_ERROR_ITEM_NOT_FOUND ;
  constructor() { }

  ngOnInit(): void {
  }

}
