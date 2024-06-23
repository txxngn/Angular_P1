import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderNgquocthComponent } from './header-ngquocth/header-ngquocth.component';
import { NgquocthAboutComponent } from './ngquocth-about/ngquocth-about.component';
import { NgquocthCountryComponent } from './ngquocth-country/ngquocth-country.component';
import { NgquocthPicsComponent } from './ngquocth-pics/ngquocth-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNgquocthComponent,
    NgquocthAboutComponent,
    NgquocthCountryComponent,
    NgquocthPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
