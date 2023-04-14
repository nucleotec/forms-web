import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './aluno/lista-aluno/lista-aluno.component';
import { ScoreComponent } from './aluno/score/score.component';
import { ProbComponent } from './aluno/prob/prob.component';
import { CadastroPacienteComponent } from './aluno/cadastro-paciente/cadastro-paciente.component';
import { PesquisaPacienteComponent } from './aluno/pesquisa-paciente/pesquisa-paciente.component';
import { CadastroUserComponent } from './aluno/cadastro-user/cadastro-user.component';
import { AvaliacaoRespondidaComponent } from './aluno/avaliacao-respondida/avaliacao-respondida.component';
import { ResultadoComponent } from './aluno/resultado/resultado.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/menu',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },


    {
        path: 'score',
        component: ScoreComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastro-usuario/:id',
        component: CadastroUserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'grafico/paciente/:id',
        component: ScoreComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'home',
        component: ScoreComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'menu',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'avaliacao-paciente',
        component: AvaliacaoRespondidaComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'avaliacao-paciente/:id',
        component: AvaliacaoRespondidaComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastrar/aluno',
        component: CadastroAlunoComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'avaliar/paciente/:id',
        component: CadastroAlunoComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'lista/paciente',
        component: ListaAlunoComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'prob/:id',
        component: ProbComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastro/paciente',
        component: CadastroPacienteComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cadastro/paciente/:id',
        component: CadastroPacienteComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'grafico/paciente',
        component: PesquisaPacienteComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'conduta/:id',
//        component: PoucoProvavelComponent,
        component: ResultadoComponent,
        canActivate: [AuthGuard]
    }


]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}