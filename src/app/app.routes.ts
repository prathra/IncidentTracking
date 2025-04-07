import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { IncidentComponent } from './pages/incident/incident.component';
import { LogInComponent } from './pages/logIn/logIn.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogInComponent,
  },

  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'incident',
        component: IncidentComponent,
      },
    ],
  },
];
