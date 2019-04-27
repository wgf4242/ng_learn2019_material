import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavRoutingModule} from './sidenav-routing.module';
import {SidenavComponent} from './sidenav.component';
import {DemoMaterialModule} from '../material-modules';
import {SidenaOpenCloseExampleComponent} from './components/sidena-open-close-example/sidena-open-close-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidenavBackdropExampleComponent} from './components/sidenav-backdrop-example/sidenav-backdrop-example.component';
import {SidenavDisableCloseExampleComponent} from './components/sidenav-disable-close-example/sidenav-disable-close-example';
import {SidenavAutosizeExampleComponent} from './components/sidenav-autosize-example/sidenav-autosize-example';
import {SidenavFixedExampleComponent} from './components/sidenav-fixed-example/sidenav-fixed-example';
import {SidenavResponsiveExampleComponent} from './components/sidenav-responsive-example/sidenav-responsive-example';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenaOpenCloseExampleComponent,
    SidenavBackdropExampleComponent,
    SidenavDisableCloseExampleComponent,
    SidenavAutosizeExampleComponent,
    SidenavFixedExampleComponent,
    SidenavResponsiveExampleComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SidenavModule {
}
