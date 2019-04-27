import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent} from './sidenav.component';
import {SidenaOpenCloseExampleComponent} from './components/sidena-open-close-example/sidena-open-close-example.component';
import {SidenavBackdropExampleComponent} from './components/sidenav-backdrop-example/sidenav-backdrop-example.component';
import {SidenavDisableCloseExampleComponent} from './components/sidenav-disable-close-example/sidenav-disable-close-example';
import {SidenavAutosizeExampleComponent} from './components/sidenav-autosize-example/sidenav-autosize-example';
import {SidenavFixedExampleComponent} from './components/sidenav-fixed-example/sidenav-fixed-example';
import {SidenavResponsiveExampleComponent} from './components/sidenav-responsive-example/sidenav-responsive-example';

const routes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: 'sidenav-1', component: SidenaOpenCloseExampleComponent },
  { path: 'sidenav-2', component: SidenavBackdropExampleComponent },
  { path: 'sidenav-3', component: SidenavDisableCloseExampleComponent },
  { path: 'sidenav-4', component: SidenavAutosizeExampleComponent },
  { path: 'sidenav-5', component: SidenavFixedExampleComponent },
  { path: 'sidenav-6', component: SidenavResponsiveExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
