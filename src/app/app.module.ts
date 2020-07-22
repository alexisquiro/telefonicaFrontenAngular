import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactoComponent } from './components/add-contacto/add-contacto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { FichaContactoComponent } from './components/ficha-contacto/ficha-contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EditarContactoComponent } from './components/editar-contacto/editar-contacto.component'



const routes: Routes =[
  {
    path:'add_contacto',
    component:AddContactoComponent


  },
  {
    path:'homepage',
    component:HomepageComponent

  },
  {
    path:'edit',
    component:EditarContactoComponent

  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddContactoComponent,
    PrincipalComponent,
    NavComponent,
    FichaContactoComponent,
    HomepageComponent,
    EditarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
