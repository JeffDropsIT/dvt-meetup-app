import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Category } from "../category/category.model";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 

  categories:Category[];

  constructor() { 
    this.categories = [new Category(1, "Arts & Culture", "Arts"), 
                new Category(2, "Career & Business", "Business"), new Category( 4, "Community & Environment", "Community"), new Category(5, "Dancing", "Dancing"), new Category(18, "Book Clubs", "Book Clubs") ]
  }

  addCategory(id:number, name:string, shortname:string):void{
    console.log(`adding article Category: ${name} and id ${id}`);
    this.categories.push(new Category(id, name, shortname));


  }

  ngOnInit() {
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
      $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
      });
      /*End Dropdown Menu*/


      $('.dropdown-menu li').click(function () {
      var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
      $('.msg').html(msg + input + '</span>');
      }); 
  }

}
