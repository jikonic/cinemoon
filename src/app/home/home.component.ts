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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule,RouterLink, NgFor, NgIf, MatListModule, MatInputModule,
    MatSelectModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  private service : WebService
  public recommended: MovieModel[]= []
  // public filmovi: string[]=[]
  public filmovi: string[]= [
    'It Ends With Us', 'Terrifier 3', 'Smile', 'Sonic 3', 'In My Head 2','Megalopolis', 'Grof Monte Kristo', 'The Garfield',
    'Grozan ja 4', 'Young Hearts','Bad Boys: Ride or Die'
  ]
  
  public zanrovi: string [] = [
    'Horror', 'Romance/Drama', 'Family/Comedy', 'Action/Adventure', 'Romance', 'Sci-fi', 'Sci-fi/Drama',
    'Crime', 'Horror/Crime'
  ]


constructor(private client : HttpClient){
  this.service= new WebService()

}
ngOnInit(): void {

   this.service.getRecommendedFilms().subscribe(rsp => this.recommended = rsp.content)
   this.service.getAvailableFilmovi().subscribe(rsp => this.filmovi = rsp)
}

}
