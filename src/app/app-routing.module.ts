import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
 { path:'index', component: IndexComponent},
 { path:'Home', component: IndexComponent},
 { path:'ajout', component: AjoutComponent},
 { path:'read', component: ReadComponent},
 { path:'**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
