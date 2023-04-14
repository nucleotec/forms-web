import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondutaComponent } from './conduta.component';



@NgModule({
  declarations: [CondutaComponent],
  imports: [
    CommonModule
  ], exports:[
    CondutaComponent
  ]
})
export class CondutaModule { }
