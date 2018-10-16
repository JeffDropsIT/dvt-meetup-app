import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICategory } from './category.interface';
import { catchError } from 'rxjs/operators'﻿

const api_cors_anywhere = "https://cors-anywhere.herokuapp.com/"
const meetup_url = "https://api.meetup.com/2/categories/?key=513e573e4a79667c603234275c244d"

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url: string =  api_cors_anywhere + meetup_url;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory>{
    return this.http.get<ICategory>(this.url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
