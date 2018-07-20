import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  recipe$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.recipe$ = params.id);
  }

  ngOnInit() {
    this.data.getOneRecipe(this.recipe$).subscribe(
      data =>
      this.recipe$ = data['hits']
  );   console.log(this.data);

  }

}
