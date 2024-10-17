import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [NgFor, NgIf, HttpClientModule, MatCardModule,MatFormField,MatButtonModule,
    MatInputModule,MatSelectModule,RouterLink],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {

  @Input() filmovi: string[] | undefined
  @Input() zanrovi: string[] | undefined

}
