import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  recipes$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRecipes().subscribe(
      data => {
        this.recipes$ = data['hits'];
      });
      console.log(this.data);
  }
searchItem(search) {
  if (search) {
  this.data.search(search).subscribe(
    data => {
      this.recipes$ = data['hits'];
    });
  }
}
}
