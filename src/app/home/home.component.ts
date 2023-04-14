import { User } from './../core/user/user';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { CadastroPaciente } from '../aluno/cadastro-paciente/cadastro-paciente';
import { AlunoService } from '../aluno/aluno.service'
import { UserService } from '../core/user/user.service';
import { HomeComponent } from './home.component';


@Component({
    templateUrl: './home.component.html',
    
})
export class HomeComponent{
    ListaPacientes: CadastroPaciente[] = [];
    ListaUser: User[] = [];
    PacienteForm: FormGroup
    searchText?:any;
    usuario;
    constructor(
        private AlunoService: AlunoService,
        private router: Router,
        private formBuilder: FormBuilder,
        private user: UserService
      ) { }
    
      ngOnInit(): void {

     this.usuario =  this.user.user.perfil

        this.pesquisaTodos();

        this.PacienteForm = this.formBuilder.group({
          pesquisarTodos: ['']
        })
      }

      

      pesquisaTodos() {
        this.AlunoService.getAllPacientes().subscribe(result => { this.ListaPacientes = result })
      }

      editarAluno(id) {
        this.router.navigate(['/avaliar/paciente', id])
      }
    
    
    
      deletarAluno(id) {
    
        if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
          this.AlunoService.deletePaciente(id).subscribe(result => { this.ListaPacientes = result; })
          alert('Aluno excluído.')
          window.location.reload();
        }
    
      }

      logout(){
        this.user.logout();
        this.router.navigate(['/login'])
      }

      
   
}