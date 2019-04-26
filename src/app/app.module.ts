import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './material-modules';
import { LinksComponent } from './links/links.component';
import { SidenavModule } from './sidenav/sidenav.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
