import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CategoriesService } from '../services/categories/categories.service';
import { startWith } from "rxjs/operators";
const KEY = "CAT_KEYS";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 

  categories;
  constructor(private categoriesService: CategoriesService) { }


  getCategories(): void{
    this.categories = this.categoriesService.getCategories();  //.subscribe(data => this.categories = data.results);

    this.categories.subscribe( 
      data => localStorage[KEY] = JSON.stringify(data.results)
    );

    this.categories = this.categories.pipe(
      startWith(JSON.parse(localStorage[KEY] || "[]"))
    )
  }




  ngOnInit() {

    this.getCategories();

    /*Dropdown Menu*/
    this.dropDown();

  }
  dropDown():void{
    $('.dropdown').click(function () {
      $(this).attr('tabindex', 1).focus();
      $(this).toggleClass('active');
      $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
      $(this).removeClass('active');
      $(this).find('.dropdown-menu').slideUp(300);
    });
  }

}
