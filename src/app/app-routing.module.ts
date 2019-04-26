import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  { path: '',   redirectTo: '/links', pathMatch: 'full' },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
