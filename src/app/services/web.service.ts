import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PageModel } from '../models/page.model';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private client: HttpClient
  private baseUrl : string

  constructor() {
    this.client=inject(HttpClient)
    this.baseUrl = 'file:///D:/Desktop/filmovi.xml'
   }

public  getRecommendedFilms(){
  const url = `${this.baseUrl}/file:///D:/Desktop/film.xml`
  return  this.client.get<PageModel<MovieModel>>(url,{
    headers: {
      'Accept' : 'application/json'
    }
   })
  }
    public getFilmsByZanr(fil : string){
    const url = `${this.baseUrl}/file:///D:/Desktop/film.xml/${fil}?page=0&size=30`
    return  this.client.get<PageModel<MovieModel>>(url,{
      headers: {
        'Accept' : 'application/json'
      }
     })

}
public getAvailableFilmovi() {
  const url = `${this.baseUrl}/file:///D:/Desktop/film.xml`
  return  this.client.get<string[]>(url,{
    headers: {
      'Accept' : 'application/json'
    }
   })
}

}
