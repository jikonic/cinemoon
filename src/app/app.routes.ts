import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { EventsComponent } from './events/events.component';
import { KlubComponent } from './klub/klub.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'bioskopi', component: BioskopiComponent},
    {path:'events', component: EventsComponent},
    {path:'klub', component: KlubComponent},
   {path: 'search', component: SearchComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'login', component: LoginComponent},
    {path:'**', redirectTo:''}

];
