import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() groupsObj;
  filterList = [];
  constructor(private router: Router) {
   }

  onSelected(id){
    if(!this.filterList.includes(id)){
       
    }
    
    var li = document.getElementById(id);
    if(li.classList.contains("selected")){
      li.classList.remove("selected");
      console.log("LIst b4: ", this.filterList)
      this.removeItem(id);
      console.log("LIst after: ", this.filterList)
    }else{
      li.classList.add("selected");
      console.log("added b4: ", this.filterList)
      this.filterList.push(id);
      console.log("added after: ", this.filterList)
    }
  }

  removeItem(item){
    var index = this.filterList.indexOf(item);
    if (index > -1) {
      this.filterList.splice(index, 1);
    }
  }

  onFilter(){
    if(this.filterList.length > 0){

      this.router.navigate(["/groups", this.filterList.toString() , "GROUPS"]);

      console.log("pressed");
      //this.filterList = [];
    }
  }

  ngOnInit() {
   
  }

}
