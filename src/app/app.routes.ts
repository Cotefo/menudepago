import { Routes } from '@angular/router';
import { CancelsuscriptionComponent } from './pages/cancelsuscription/cancelsuscription.component';
import { PaymenthistoryComponent } from './pages/paymenthistory/paymenthistory.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  { path: 'welcome',
    loadComponent:()=>import("./pages/welcome/welcome.component").then(c=>c.WelcomeComponent)
   },
   {
    path:'admin', component:LayoutComponent,
    children:[ { path: 'cancelsuscription',
       component:CancelsuscriptionComponent },
              { path: 'paymenthistory',
                 component:PaymenthistoryComponent },
              { path: 'settings',
                component:SettingsComponent }
            ]
   },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
];
