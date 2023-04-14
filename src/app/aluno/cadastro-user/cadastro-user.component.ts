import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service'
import { UserService } from 'src/app/core/user/user.service';
import { Users } from './User';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  ListaUsers: Users[] = [];
  CadastroUserForm: FormGroup
  showInfantil = false;
  showFundamental = false;
  showMedio = false;
  caixaVazia = true;
  fechar:boolean = false
  

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private AlunoService: AlunoService,
    private user: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.pesquisaTodos();

   let usuario = this.user.user.usuario

   console.log(usuario)

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.user.getByIdUser(id))
      )
      .subscribe(paciente => this.editarForm(paciente)
      );

    this.CadastroUserForm = this.formBuilder.group(
      
      {
      id: [null],
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      perfil: ['', Validators.required],
    });
    
  }

  pesquisaTodos() {
    this.user.getAll().subscribe(result => { this.ListaUsers = result })
  }

  editarForm(aluno: Users) {

    this.CadastroUserForm.patchValue(
      {
        id: aluno[0].id,
        usuario: aluno[0].usuario,
        senha: aluno[0].senha,
        perfil: aluno[0].perfil,
      }
    )
    this.verificarEdicao()
  }

  preencheCampos(aluno: Users) {
    this.CadastroUserForm.patchValue(
      {
        
        usuario: aluno.usuario,
        senha: aluno.senha,
        perfil: aluno.perfil,
       
      });

  }

  editarAluno(id) {
    
    this.router.navigate(['/cadastro-usuario', id])
    
  }

  

  verificarEdicao(){
    let elemento = (<HTMLInputElement>document.getElementById("senha")).value;
    console.log(elemento)

    if(elemento.length > 0){
      this.fechar = true
    }
  }

  limpar(){
   /*  this.CadastroUserForm.reset(); */
   this.router.navigate(['/menu']) 
    /* this.fechar = false */
  }

  deletarAluno(id) {

    if (window.confirm('Tem certeza que deseja excluir este Usuário?')) {
      this.user.delete(id).subscribe(result => { this.ListaUsers = result; })
      alert('Usuário excluído.')
      window.location.reload();
    }

  }

  submit() {
    if (this.CadastroUserForm.value.id) {
      const atualizarAluno = this.CadastroUserForm.getRawValue() as Users;
      this.user.updateUser(atualizarAluno).subscribe(
        success => {
          alert('Usuário atualizado!')
          this.CadastroUserForm.reset()
          this.router.navigate(['/cadastro-usuario']) 

        },
        error => {
          alert('Erro ao atualizar.')
        }
      )
    } else {
      const novoAluno = this.CadastroUserForm.getRawValue() as Users;
      /* this.AlunoService.sendEmail(novoAluno).subscribe(
        success => {
          alert('Email enviado')
          
        },
        error => {
          alert('Erro ao salvar.')
        }
      ) */
      this.user.create(novoAluno).subscribe(
        success => {
          alert('Novo Usuário salvo!')
            /* this.router.navigate(['/cadastro-usuario'])  */
            window.location.reload();
        },
        error => {
          alert('Erro ao salvar.')
        }
      )
    }
  }

  



}
