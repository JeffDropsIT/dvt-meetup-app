import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups/groups.service';
import { error } from '../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isLoading = false;
  groups = []
  constructor(private groupsService: GroupsService) { }


  getGroups(): void{
    this.isLoading = true;
    this.groupsService.getGroups().subscribe(data => this.groups = data, error => console.log(error), ()=>{
      this.isLoading = false;
    });
    //this.groupsService.getGroups().subscribe(data => console.log("Groups",data));
  }
  ngOnInit() {
    this.getGroups();
    
  }

}
