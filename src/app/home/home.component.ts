import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MovieModel } from '../models/movie.model';
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { SearchContainerComponent } from "../search-container/search-container.component";
import swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, RouterLink, NgFor, NgIf, MatListModule, MatInputModule,
    MatSelectModule, SearchContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  public webService : WebService
  private dataService: DataService
  public recommended: MovieModel[]= []
  // public filmovi: string[]=[]
  public filmovi: string[]= []
  
  public zanrovi: string [] = []


constructor(private client : HttpClient){
  this.webService= new WebService()
  this.dataService= new DataService()

}
ngOnInit(): void {

   this.webService.getRecommendedFilms().subscribe(rsp => this.recommended = rsp.content)
   this.webService.getAvailableFilmovi().subscribe(rsp => this.filmovi = rsp)
  this.zanrovi= this.dataService.getZanrovi()
  this.filmovi=this.dataService.getFilmovi()
  }

  public doMacka(){
    //@ts-ignore
    Swal.fire({
      text: "Uspesno!",
      width: 300,
      background: "#fff url(https://sweetalert2.github.io/#input-typesimages/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif")
        left top
        no-repeat
      `
    });
    
}
}
