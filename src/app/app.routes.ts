import { Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PricesComponent } from './components/prices/prices.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'inschrijven', component: EnrollComponent },
  { path: 'afspraak', component: AppointmentComponent },
  { path: 'team', component: TeamComponent },
  { path: 'behandelingen-tarieven', component: PricesComponent },
  { path: 'contact', component: ContactComponent },
];
