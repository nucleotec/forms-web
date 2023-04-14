import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { AppRoutingModule } from '../app.routing.module';
import { ScoreComponent } from './score/score.component';
import { ProbComponent } from './prob/prob.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { PesquisaPacienteComponent } from './pesquisa-paciente/pesquisa-paciente.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from "ng-apexcharts";
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AvaliacaoRespondidaComponent } from './avaliacao-respondida/avaliacao-respondida.component';
import { CoreModule } from '../core/core.module';
import { ResultadoComponent } from './resultado/resultado.component';
import { CondutaModule } from '../compartilhado/componentes/conduta/conduta.module';

@NgModule({
  declarations: [
    CadastroAlunoComponent,
    ListaAlunoComponent, 
    ScoreComponent, 
    ProbComponent, 
    CadastroPacienteComponent, 
    PesquisaPacienteComponent, 
    CadastroUserComponent, 
    AvaliacaoRespondidaComponent,
    ResultadoComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgApexchartsModule,
    TextMaskModule,
    CoreModule,
    CondutaModule
  ],
  exports: [
    CadastroAlunoComponent,
    ListaAlunoComponent,
    ScoreComponent,
    ProbComponent,
    CadastroPacienteComponent,
    PesquisaPacienteComponent,
      
    
  ]
})
export class AlunoModule { }
