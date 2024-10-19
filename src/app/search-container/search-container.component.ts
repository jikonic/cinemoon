import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [NgFor, NgIf, HttpClientModule, MatCardModule,MatFormField,MatButtonModule,
    MatInputModule,MatSelectModule],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {

  @Input() filmovi: string[] | undefined
  @Input() zanrovi: string[] | undefined
  public sFilmovi: string | null =null
  public sZanr: string | null =null


constructor(
  private router: Router,
  private activeRoute: ActivatedRoute
){}

public onChange(){

}


public doSearch(){

  if (this.router.url != "/search") {
    this.router.navigate(['/search'], {relativeTo: this.activeRoute})
 
  }
  console.log(this.sFilmovi, this.sZanr)

}

}
