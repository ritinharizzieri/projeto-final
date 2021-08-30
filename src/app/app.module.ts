import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
