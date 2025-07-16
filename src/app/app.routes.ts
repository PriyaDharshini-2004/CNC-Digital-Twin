import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { MachineDetailsComponent } from './machine-details/machine-details';
import { AnalyticsComponent } from './analytics/analytics';
import { MasterDataComponent } from './master-data/master-data';
import { ReportsComponent } from './reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'master-data', component: MasterDataComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'machine-details/:machineId', component: MachineDetailsComponent }
];
