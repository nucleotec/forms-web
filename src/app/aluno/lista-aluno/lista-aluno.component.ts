import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { AlunoService } from '../aluno.service'
import { CadastroPaciente } from '../cadastro-paciente/cadastro-paciente';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {
  teste;
  ListaPacientes: CadastroPaciente[] = [];
  PacienteForm: FormGroup
  searchText?: any;
  selectedHero;
  mostrarInfo: boolean = false;
  usuario;
  perfil;
  nome;
  idade;
  peso;
  telefone;
  nomeMae;
  email;
  altura;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AlunoService: AlunoService,
    private user: UserService
  ) { }

  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef;

  ngOnInit() {

    this.usuario = this.user.user.usuario;
    this.perfil = this.user.user.perfil

    this.pesquisaTodos();
    this.teste1();

    this.PacienteForm = this.formBuilder.group({
      pesquisarTodos: ['']
    })


  }
  pesquisaTodos() {
    this.AlunoService.getAllPacientes().subscribe(result => {
      this.ListaPacientes = result;
      //console.log("Pacientes:", this.ListaPacientes)
    })
  }

  teste1() {
    
    for (var i in this.ListaPacientes) {
      //console.log(this.ListaPacientes)
    }

  }
  editarAluno(id) {

    this.router.navigate(['/cadastro/paciente', id])
  }

  mostrar(id, nome, idade, peso,altura, telefone, nomeMae, email) {

    this.mostrarInfo = true;

    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.telefone = telefone
    this.nomeMae = nomeMae
    this.email = email

  }

  deletarAluno(id) {

    if (window.confirm('Tem certeza que deseja excluir este paciente?')) {
      this.AlunoService.deletePaciente(id).subscribe(result => { this.ListaPacientes = result; })
      alert('Paciente excluído.')
      window.location.reload();
    }

  }

  onSelect(aluno: CadastroPaciente): void {
    this.selectedHero = aluno;
    //console.log(this.selectedHero);
  }

}
