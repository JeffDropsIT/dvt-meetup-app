import { Component, OnInit, Input } from '@angular/core';
import { Category } from "./category.model";
@Component({
  selector: 'app-category',
  template: `<li >
                    {{ category.name }}
              </li>
                `,
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category:Category;

  constructor() { 
  }

  ngOnInit() {

    $('li').click(function () {
      $(this).parents('.dropdown').find('span').text($(this).text());
    });

  }

}
