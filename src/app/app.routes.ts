import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { EventsComponent } from './events/events.component';
import { KlubComponent } from './klub/klub.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'bioskopi', component: BioskopiComponent},
    {path:'events', component: EventsComponent},
    {path:'klub', component: KlubComponent},
    {path:'**', redirectTo:''}

];
