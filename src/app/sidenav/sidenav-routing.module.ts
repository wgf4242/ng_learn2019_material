import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent} from './sidenav.component';
import {SidenaOpenCloseExampleComponent} from './components/sidena-open-close-example/sidena-open-close-example.component';
import {SidenavBackdropExampleComponent} from './components/sidenav-backdrop-example/sidenav-backdrop-example.component';

const routes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: 'sidenav-1', component: SidenaOpenCloseExampleComponent },
  { path: 'sidenav-2', component: SidenavBackdropExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
