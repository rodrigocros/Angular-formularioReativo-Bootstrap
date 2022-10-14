import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandigPageComponent } from './components/landig-page/landig-page.component';
import { RegistroMateriaisComponent } from './components/registro-materiais/registro-materiais.component';

@NgModule({
  declarations: [
    AppComponent,
    LandigPageComponent,
    RegistroMateriaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
