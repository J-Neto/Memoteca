import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  // All components, directives and pipes
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
  ],

  // Modules (inner app or external)
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Services
  providers: [],

  // First app render
  bootstrap: [AppComponent]
})
export class AppModule { }
