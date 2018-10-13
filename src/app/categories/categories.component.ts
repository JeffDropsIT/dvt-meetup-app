import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Category } from "../category/category.model";
import { CategoriesService } from '../services/categories/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 

  categories = [];

  constructor(private categoriesService: CategoriesService) { 
  
  }



  ngOnInit() {


    this.categoriesService.getCategories().subscribe(data => this.categories = data.results);



    /*Dropdown Menu*/
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
