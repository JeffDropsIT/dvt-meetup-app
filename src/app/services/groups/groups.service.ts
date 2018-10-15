import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';




const api_cors_anywhere = "https://cors-anywhere.herokuapp.com/" //dublicate make it a dependecy
const api_url = "https://api.meetup.com/find/groups?key=513e573e4a79667c603234275c244d";
@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  url: string = api_cors_anywhere + api_url;
  constructor(private http:HttpClient) { }

  getGroups(categoryId?:number): Observable<any>{
    if(categoryId){
      this.url =  api_cors_anywhere + api_url +`&category=${categoryId}`
      console.log(this.url)
    }

    return this.http.get<any>(this.url);
  }
}
