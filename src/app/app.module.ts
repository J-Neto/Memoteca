import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // All components, directives and pipes
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
  ],

  // Modules (inner app or external)
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // Services
  providers: [],

  // First app render
  bootstrap: [AppComponent]
})
export class AppModule { }
