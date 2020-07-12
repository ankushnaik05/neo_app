import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import {ShowNeoComponent} from "./show-neo/show-neo.component";

const routes: Routes = [
   { path: '', redirectTo: '/show', pathMatch: 'full' },
  { path: 'show', component: ShowNeoComponent }
 
 
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
