import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SearchContainerComponent } from "../search-container/search-container.component";
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PageModel } from '../models/page.model';
import { MovieModel } from '../models/movie.model';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
// import Swal from 'sweetalert2';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatTableModule,MatPaginator,MatPaginatorModule,RouterLink,NgFor,NgIf,MatButtonModule,MatSelectModule,MatInputModule,MatCardModule,HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, AfterViewInit {

  private webService : WebService
  public dataService :DataService
  public data: PageModel<MovieModel> | null = null

  public filmovi: string[] = []
  public zanrovi: string[] = []

public sFilmovi: string | null = null
public sZanr: string | null = null

constructor (private route: ActivatedRoute 
 
  
){
  this.webService = new WebService()
  this.dataService= new DataService()
}

public displayedColumns: string[] = ['position', 'film', 'zanr', 'action']; 
public dataSource:  MatTableDataSource<MovieModel> | null= null

@ViewChild(MatPaginator) paginator : MatPaginator |null = null

ngAfterViewInit(): void {
    this.dataSource!.paginator=this.paginator
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.sFilmovi=params['filmovi']
     this.sZanr=params['zanr']
    })

    this.webService.getAvailableFilmovi().subscribe(rsp => this.filmovi = rsp)
  this.zanrovi= this.dataService.getZanrovi()
  this.filmovi=this.dataService.getFilmovi()
 
}
public doSearch(){
  if(this.filmovi == null){
   // @ts-ignore
   Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
   })
   return
  }
  this.webService.getFilmsByZanr(this.sFilmovi!).subscribe(rsp=> {
    this.dataSource = new MatTableDataSource<MovieModel>(rsp.content)
    this.dataSource.paginator=this.paginator;
  
  })
  console.log(this.sFilmovi, this.sZanr)

}

}
