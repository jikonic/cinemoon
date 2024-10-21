import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface bioskopiLista {
  name: string;
  children?: bioskopiLista[];
}
const TREE_DATA: bioskopiLista[] = [
  {
    name: 'Srbija',
    children: [
      {
        name: 'Beograd',
        children: [{name: 'TC Galerija / III sprat'}, {name: 'TC Usce / II sprat'}, {name:'Beo Shopping Centar / III sprat'}, {name:'BIG FASHION / II sprat'}],
      },
      {
        name: 'Novi Sad',
        children: [{name: 'TC Promenada / II sprat'}],
      },
      {
        name: 'Subotica',
        children: [{name: 'Zmaj Jovina 35'}],
      },
      {
        name: 'Nis',
        children: [{name: 'TC Delta / II sprat'}, {name: 'Jug Bogdanova 5'}]
      },
      {
        name: 'Valjevo',
        children: [{name: 'STOP SHOP Valjevo'}, {name:'Vojvode Misica 29'}],
      },
      {
        name: 'Uzice',
        children: [{name: 'Dimitrija Tucovica 29'}],
      },
      {
        name: 'Cacak',
        children: [{name: 'Gospodar Jovanova 10'}, {name:'Nemanjina 58'}],
      },
      {
        name: 'Kraljevo',
        children: [{name: 'Olge Jovicic-Rite 15'}],
      },
      {
        name: 'Kragujevac',
        children: [{name: 'BIG FASHION / II sprat'}, {name:'Nikole Pasica 5'}],
      },
      {
        name: 'Ivanjica',
        children: [{name: 'Branislava Nusica 11'}],
      },
      {
        name: 'Sabac',
        children: [{name: 'Milosa Pocerca 15'}, {name:'Ante Bogicevica 11'}],
      },
      {
        name: 'Novi Pazar',
        children: [{name: 'Rifata Burdzevica 5'}],
      },
      {
        name: 'Jagodina',
        children: [{name: 'Kralja Petra Prvog 4'}],
      },
      {
        name: 'Krusevac',
        children: [{name: 'Dusanova 31'}],
      },
    
    ],
  },
  {
      name: 'Crna Gora',
    children: [
      {
        name: 'Podgorica',
        children: [{name: 'Bulevar Svetog Petra Cetinjskog 33'}, {name: 'City Mall / II sprat'}, {name:'Big Fashion / III sprat'}],
      },
      {
        name: 'Niksic',
        children: [{name: 'Manastirska 13'}],
      },
      {
        name: 'Bar',
        children: [{name: 'Nikole Lekica 2'}],
      },
    
    ],
  },
  {
    name: 'Hrvatska',
  children: [
    {
      name: 'Zagreb',
      children: [{name: 'Tratinska 12'}, {name: 'Brauna Trenka 13'}],
    },
    {
      name: 'Split',
      children: [{name: 'Setaliste Petra Preradovica'}],
    },
  
  ],
},
{
  name: 'Italija',
children: [
  {
    name: 'Rim',
    children: [{name: 'Via Cavour 4'}],
  },
  {
    name: 'Napulj',
    children: [{name: 'Via Monte di Dio 10'}],
  },

],
},
];
@Component({
  selector: 'app-bioskopi',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatTreeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bioskopi.component.html',
  styleUrl: './bioskopi.component.css'
})
export class BioskopiComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: bioskopiLista) => node.children ?? [];

  hasChild = (_: number, node: bioskopiLista) => !!node.children && node.children.length > 0;
}
