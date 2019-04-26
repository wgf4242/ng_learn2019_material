import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavRoutingModule} from './sidenav-routing.module';
import {SidenavComponent} from './sidenav.component';
import {DemoMaterialModule} from '../material-modules';
import { SidenaOpenCloseExampleComponent } from './components/sidena-open-close-example/sidena-open-close-example.component';
import {FormsModule} from '@angular/forms';
import { SidenavBackdropExampleComponent } from './components/sidenav-backdrop-example/sidenav-backdrop-example.component';

@NgModule({
  declarations: [SidenavComponent, SidenaOpenCloseExampleComponent, SidenavBackdropExampleComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class SidenavModule {
}
