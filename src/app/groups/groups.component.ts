import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups/groups.service';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from "@angular/router"
import { startWith } from "rxjs/operators";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isLoading = false;
  groups;
  selectedCategory;
  groupsObj = [];
  allGroups = [];
  idCollection = [];
  constructor(private groupsService: GroupsService, private route:ActivatedRoute, private router: Router) {
    this.reloadPage();
   }


   //stack overflow
   reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
   }

  getAllGroupsIdsWithId(){
    this.groups.subscribe( 
      data => {
        data.forEach(element => {
         
          if(element.meta_category){
            let listIds = element.meta_category.category_ids;
            for(var i in listIds){
              console.log("item: ", listIds[i]);
              if(!this.idCollection.includes(listIds[i])){
                this.idCollection.push(listIds[i])
              }
            }
          }
        });    
        console.log(this.idCollection.toString())
        this.addFilterOptions();
      }

    );



  }

  addFilterOptions():void{
    if(this.idCollection){
      this.groupsService.getFilterGroups(this.idCollection.toString()).subscribe(data => {
        data.forEach(element => {
     
          if(element.category){
            if(!this.allGroups.includes(element.category.name)){
              this.allGroups.push(element.category.name);
              this.groupsObj.push(element.category);
              console.log("element",element.category.name);
            }
          }
        });;
      });
    }
  }

onFilterResults():void{

}

  getGroups(categoryId?): void{
    console.log("getGroups id: "+categoryId);
    if(this.groups === null){
         this.isLoading = true;
    }
    this.groups = this.groupsService.getGroups(categoryId);
    if(categoryId){
      this.getAllGroupsIdsWithId();
    }
    this.groups.subscribe( 
      data => localStorage[categoryId] = JSON.stringify(data),
      error => console.log(error),
      ()=>{
        this.isLoading = false; 
      }
    );
    this.groups = this.groups.pipe(
      startWith(JSON.parse(localStorage[categoryId] || "[]"))
    )

   
    console.log(typeof(this.groups));
  }

  

  getCategoryId(){

    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get("id"));
      let name = params.get("name");
      console.log("name: ", name);
      this.selectedCategory = name;
 
      this.getGroups(id);

    });

  }
  ngOnInit() {

    this.getCategoryId();
    
  }

}
