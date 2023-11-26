import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DataServiceService } from './data-service.service';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    IndexComponent,
    NotfoundComponent,
    AjoutComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    DataServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
