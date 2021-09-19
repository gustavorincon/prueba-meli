import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params);
     /*this.idQuote = String(params['id']); */
    });
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
     /*this.idQuote = String(params['id']); */
    });
  }

}
