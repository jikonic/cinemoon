import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

public getFilmovi (): string[]{
  return [
    'It Ends With Us', 'Terrifier 3', 'Smile', 'Sonic 3', 'In My Head 2','Megalopolis', 'Grof Monte Kristo', 'The Garfield',
    'Grozan ja 4', 'Young Hearts','Bad Boys: Ride or Die'
  ]
}

public getZanrovi(): string []{
  return[
 'Horror', 'Romance/Drama', 'Family/Comedy', 'Action/Adventure', 'Romance', 'Sci-fi', 'Sci-fi/Drama',
    'Crime', 'Horror/Crime'
  ]
}
}
