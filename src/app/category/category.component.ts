import { Component, OnInit, Input } from '@angular/core';
import { Category } from "./category.model";
import { Router } from "@angular/router"
@Component({
  selector: 'app-category',
  template: `<li (click)="onSelectedCategory()">
                    {{ category.name }}
              </li>
                `,
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category:Category;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.displayCategory();
   

  }
  onSelectedCategory(){
    console.log("Id: " + this.category.id + " item: "+this.category.name);
    this.router.navigate(["/groups", this.category.id]);
  }
  displayCategory():void{
    $('li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
    });
  }

}
