import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups/groups.service';
import { ActivatedRoute, ParamMap } from "@angular/router"
import { startWith } from "rxjs/operators";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isLoading = false;
  groups;
  constructor(private groupsService: GroupsService, private route:ActivatedRoute) { }


  getGroups(categoryId?:number): void{
    console.log("getGroups id: "+categoryId);
    if(this.groups === null){
         this.isLoading = true;
    }
    this.groups = this.groupsService.getGroups(categoryId);
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
      this.getGroups(id);
    });

  }
  ngOnInit() {

    this.getCategoryId();
    
  }

}
