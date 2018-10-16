import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CategoriesService } from '../services/categories/categories.service';
import { startWith } from "rxjs/operators";
import { error } from '../../../node_modules/@angular/compiler/src/util';
const KEY = "CAT_KEYS";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 

  categories = [];
  errorMessage;
  constructor(private categoriesService: CategoriesService) { }


  getCategories(): void{

    this.categoriesService.getCategories().subscribe( 
      data => {if(data){localStorage[KEY] = JSON.stringify(data.results)}},
      error =>{
        this.errorMessage = error;
      }
    );
    this.categoriesService.getCategories().pipe(
      startWith(JSON.parse(localStorage[KEY] || "[]"))
    ).subscribe( data => {
       for(var el in data){
         this.categories.push(data[el]);
       }
    },

    error =>{
      this.errorMessage = error;
    }
  
  );
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
