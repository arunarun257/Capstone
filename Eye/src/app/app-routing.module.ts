import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { ServicesComponent } from './services/services.component';
import { OurteamComponent } from './ourteam/ourteam.component'; 
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'patientdetails', component: PatientdetailsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'ourteam', component: OurteamComponent},
  { path: 'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
