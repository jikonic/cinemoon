import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchContainerComponent } from "../search-container/search-container.component";
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchContainerComponent,HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  private webService : WebService
  private dataService :DataService
  

  public filmovi: string[] = []
  public zanrovi: string[] = []

public qfilmovi: string | null = null
public qzanrovi: string | null = null

constructor (private route: ActivatedRoute 
 
  
){
  this.webService = new WebService()
  this.dataService= new DataService()
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.qfilmovi=params['filmovi']
     this.qzanrovi=params['zanr']
    })

    this.webService.getAvailableFilmovi().subscribe(rsp => this.filmovi = rsp)
  this.zanrovi= this.dataService.getZanrovi()
  this.filmovi=this.dataService.getFilmovi()
 
}

}
