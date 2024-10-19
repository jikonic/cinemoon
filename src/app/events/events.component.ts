import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Events {
  film: string;
  position: number;
  weight: string;
  symbol: string;
  projekcija:string;
}

const ELEMENT_DATA: Events[] = [
  {position: 1, film: 'It Ends With Us', weight: 'Romance/Drama', symbol: '5', projekcija: '20:30'},
  {position: 2, film: 'Terrifier 3 ', weight: 'Horror', symbol: '2', projekcija: '20:00'},
  {position: 2, film: 'Smile ', weight: 'Horror', symbol: '3', projekcija: '20:00'},
  {position: 2, film: 'In My Head 2', weight: 'Family/Comedy', symbol: '5', projekcija: '15:30'},
  {position: 2, film: 'Sonic 3 ', weight: 'Action/Adventure', symbol: '4', projekcija: '19:00'},
]


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'projekcija'];
  dataSource = ELEMENT_DATA;

}
