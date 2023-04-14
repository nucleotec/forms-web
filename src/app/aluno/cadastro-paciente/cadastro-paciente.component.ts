import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service'
import { CadastroPaciente } from './cadastro-paciente';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  public myModel = ''
  public mask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  public mypeso = ''
  public maskpeso = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]

  public myaltura = ''
  public maskaltura = [/[0-9]/, '.', /\d/, /\d/]

  public mynascimento = ''
  public masknascimento = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]




  PacienteForm: FormGroup
  showInfantil = false;
  showFundamental = false;
  showMedio = false;
  caixaVazia = true;
  data_atual;
  idadeAtual;
  liberarEnvio:boolean = false;
  nomeStatus:boolean = true;
  nascimentoStatus:boolean = true;
  telefoneStatus:boolean = true;
  pesoStatus:boolean = true;
  alturaStatus:boolean = true;
  maeStatus:boolean = true;
  emailStatus:boolean = true;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private AlunoService: AlunoService,
    private user: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    let usuario = this.user.user.usuario

    //console.log(usuario)

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.AlunoService.getByIdPaciente(id))
      )
      .subscribe(paciente => this.editarForm(paciente)
      );

    this.PacienteForm = this.formBuilder.group(

      {
        id: [null],
        nome: ['', Validators.required],
        usuario: usuario,
        dataNascimento: ['', Validators.required],
        idade: ['', Validators.required],
        peso: ['', Validators.required],
        altura: ['', Validators.required],
        nomeMae: ['', Validators.required],
        Telefone: ['', Validators.required],
        email: ['', Validators.required],


      });

     

  }



  idade() {
    var elemento = (<HTMLInputElement>document.getElementById("nascimento")).value;

    var ano_informado = elemento;

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = ano_informado.split('/');
    var diaNasc = parseInt(anoNascParts[0])
    var mesNasc = parseInt(anoNascParts[1])
    var anoNasc = parseInt(anoNascParts[2])
    var idade = anoAtual - anoNasc;

    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if (mesAtual < mesNasc) {
      idade--;
    } else {
      //Se estiver no mes do nascimento, verificar o dia
      if (mesAtual == mesNasc) {
        if (new Date().getDate() < diaNasc) {
          //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
          idade--;
        }
      }
    }
    
    this.idadeAtual = idade;

  }

  verificarcampos(){

    var nome = (<HTMLInputElement>document.getElementById("nome")).value;
    var nascimento = (<HTMLInputElement>document.getElementById("nascimento")).value;
    var telefone = (<HTMLInputElement>document.getElementById("telefone")).value;
    var peso = (<HTMLInputElement>document.getElementById("peso")).value;
    var altura = (<HTMLInputElement>document.getElementById("altura")).value;
    var mae = (<HTMLInputElement>document.getElementById("mae")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;

    /* console.log(nome)
    console.log(nascimento)
    console.log(telefone)
    console.log(peso)
    console.log(altura)
    console.log(mae)
    console.log(email) */

    if(nome.length > 1){
      this.nomeStatus = false;
    }
    if(nascimento.length > 1){
      this.nascimentoStatus = false;
    }
    if(telefone.length > 1){
      this.telefoneStatus = false;
    }
    if(peso.length > 1){
      this.pesoStatus = false;
    }
    if(altura.length > 1){
      this.alturaStatus = false;
    }
    if(mae.length > 1){
      this.maeStatus = false;
    }
    if(email.length > 1){
      this.emailStatus = false;
    }

    if(nome.length <=0){
      this.nomeStatus = true;
    }
    if(nascimento.length <=0){
      this.nascimentoStatus = true;
    }
    if(telefone.length <=0){
      this.telefoneStatus = true;
    }
    if(peso.length <=0){
      this.pesoStatus = true;
    }
    if(altura.length <=0){
      this.alturaStatus = true;
    }
    if(mae.length <=0){
      this.maeStatus = true;
    }
    if(email.length <=0){
      this.emailStatus = true;
    }

    if(!this.nomeStatus  && !this.nascimentoStatus  && !this.telefoneStatus 
      && !this.pesoStatus  && !this.alturaStatus  && !this.maeStatus && !this.emailStatus){
        this.liberarEnvio = true;
      }

      /* console.log('Liberado: '+this.liberarEnvio) */

  }




  editarForm(aluno: CadastroPaciente) {

    this.PacienteForm.patchValue(
      {
        id: aluno[0].id,
        nome: aluno[0].nome,
        dataNascimento: aluno[0].dataNascimento,
        idade: aluno[0].idade,
        peso: aluno[0].peso,
        altura: aluno[0].altura,
        nomeMae: aluno[0].nomeMae,
        Telefone: aluno[0].Telefone,
        email: aluno[0].email
      }
    )
    this.verificarcampos()
  }

  preencheCampos(aluno: CadastroPaciente) {
    this.PacienteForm.patchValue(
      {

        nome: aluno.nome,
        dataNascimento: aluno.dataNascimento,
        idade: aluno.idade,
        peso: aluno.peso,
        altura: aluno.altura,
        nomeMae: aluno.nomeMae,
        Telefone: aluno.Telefone,
        email: aluno.email


      });

  }


  submit1() {
    if (this.PacienteForm.value.id) {
      const atualizarAluno = this.PacienteForm.getRawValue() as CadastroPaciente;
      this.AlunoService.updatePaciente(atualizarAluno).subscribe(
        success => {
          alert('Paciente atualizado!')
          this.PacienteForm.reset()
          this.router.navigate(['/lista/paciente'])

        },
        error => {
          alert('Erro ao atualizar.')
        }
      )
    } else {
      const novoAluno = this.PacienteForm.getRawValue() as CadastroPaciente;
      /* this.AlunoService.sendEmail(novoAluno).subscribe(
        success => {
          alert('Email enviado')
          
        },
        error => {
          alert('Erro ao salvar.')
        }
      ) */
      this.AlunoService.createPaciente(novoAluno).subscribe(
        success => {
          alert('Paciente salvo!')
          this.router.navigate(['/lista/paciente'])
        },
        error => {
          alert('Erro ao salvar.')
        }
      )
    }
  }





}
