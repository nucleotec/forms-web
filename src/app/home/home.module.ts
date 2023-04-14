import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing.module';
import { HomeComponent } from './home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule

    ],
    exports:[
        HomeComponent
    ]
})
export class HomeModule{
  
}