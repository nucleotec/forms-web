import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Aluno } from '../aluno';

import { AlunoService } from '../aluno.service'
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  alunoForm: FormGroup
  showInfantil = false;
  showFundamental = false;
  showMedio = false;
  caixaVazia = true;
  nome: String;
  controlador:number = 0;
  fatorRisco:boolean = false;
  libera:boolean = false;

  public myatendimento = ''
  public maskAtendimento = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  escolaridade = [
    "Ensino fundamental (1° grau) incompleto",
    "Ensino fundamental (1° grau) completo",
    "Ensino médio (2° grau) incompleto",
    "Ensino médio (2° grau) completo",
    "Superior completo (universitário)",
    "Pós-gradução",
  ]


  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private AlunoService: AlunoService,
    private router: Router,
    private user: UserService,
  ) { }

  ngOnInit(): void {

    let usuario = this.user.user.usuario

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.AlunoService.getByIdCadastroAvaliar(id))
      )
      .subscribe(aluno => this.editarForm(aluno)
      );

    this.alunoForm = this.formBuilder.group(
      
      {
      id: [null],
      numero: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      genero: ['M', [Validators.required]],
      escolaridade: [null, [Validators.required]],
      houveInternacao: ['N', [Validators.required]],
      houveCirurgia: ['N', [Validators.required]],
      cirurgia: [null],
      fator1: ['', Validators.required],
      fator2: ['', Validators.required],
      fator3: ['', Validators.required],
      fator4: ['', Validators.required],
      fator5: ['', Validators.required],
      fator6: ['', Validators.required],
      fator7: ['', Validators.required],
      fator8: ['', Validators.required],
      fator9: ['', Validators.required],
      fator10: ['', Validators.required],
      fator11: ['', Validators.required],
      fator12: ['', Validators.required],
      fator13: ['', Validators.required],
      fator14: ['', Validators.required],
      fator15: ['', Validators.required],
      fator16: ['', Validators.required],
      fator17: ['', Validators.required],
      fator18: ['', Validators.required],
      fator19: ['', Validators.required],
      fator20: ['', Validators.required],
      fator21: ['', Validators.required],
      fator22: ['', Validators.required],
      fator23: ['', Validators.required],
      fator24: ['', Validators.required],
      fator25: ['', Validators.required],
      fator26: ['', Validators.required],
      fator27: ['', Validators.required],
      fator28: ['', Validators.required],
      fator29: ['', Validators.required],
      fator30: ['', Validators.required],
      fator31: ['', Validators.required],
      fator32: ['', Validators.required],
      fator33: ['', Validators.required],
      fator34: ['', Validators.required],
      fator35: ['', Validators.required],
      fator36: ['', Validators.required],
      fator37: ['', Validators.required],
      fator38: ['', Validators.required],
      fator39: ['', Validators.required],
      fator40: ['', Validators.required],
      fator41: ['', Validators.required],
      fator42: ['', Validators.required],
      fator43: ['', Validators.required],
      fator44: ['', Validators.required],
      fator45: ['', Validators.required],
      fator46: ['', Validators.required],
      fator47: ['', Validators.required],
      fator48: ['', Validators.required],
      fator49: ['', Validators.required],
      fator50: ['', Validators.required],
      fator51: ['', Validators.required],
      fator52: ['', Validators.required],
      fator53: ['', Validators.required],
      fator54: ['', Validators.required],
      fator55: ['', Validators.required],
      fator56: ['', Validators.required],
      fator57: ['', Validators.required],
      fator58: ['', Validators.required],
      fator59: ['', Validators.required],
      fator60: ['', Validators.required],
      fator61: ['', Validators.required],
      fator62: ['', Validators.required],
      fator63: ['', Validators.required],
      fator64: ['', Validators.required],
      fator65: ['', Validators.required],
      fator66: ['', Validators.required],
      fator67: ['', Validators.required],
      fator68: ['', Validators.required],
      fator69: ['', Validators.required],
      fator70: ['', Validators.required],
      fator71: ['', Validators.required],
      fator72: ['', Validators.required],
      fator73: ['', Validators.required]
    
    });
    
  }

 


  liberarFormFatorRisco(){
    this.fatorRisco = true;
  }

  enviar(){
    this.libera = true
  }

  editarForm(aluno: Aluno) {

    this.alunoForm.patchValue(
      {
        id: aluno[0].id,
         nome: aluno[0].nome, 
       
        
      }
    )
    this.nome =  (<HTMLInputElement>document.getElementById("nome")).value;
     
  }

  preencheCampos(aluno: Aluno) {
    this.alunoForm.patchValue(
      {
        
         nome: aluno.nome, 
        
      });
     
  }

  
  submit1() {
   /*  if (this.alunoForm.value.id) {
      const atualizarAluno = this.alunoForm.getRawValue() as Aluno;
      this.AlunoService.update(atualizarAluno).subscribe(
        success => {
          alert('Aluno atualizado!')
          this.alunoForm.reset()

        },
        error => {
          alert('Erro ao atualizar.')
        }
      )
    } else { */
      const novoAluno = this.alunoForm.getRawValue() as Aluno;
      /* this.AlunoService.sendEmail(novoAluno).subscribe(
        success => {
          alert('Email enviado')
          
        },
        error => {
          alert('Erro ao salvar.')
        }
      ) */
      this.AlunoService.create(novoAluno).subscribe(
        success => {
          alert('Avaliação Salva!')
            this.router.navigate(['/score']) 
        },
        error => {
          alert('Erro ao salvar.')
        }
      )
      this.AlunoService.createprotecao(novoAluno).subscribe(
        /* success => {
          alert('Avaliação Salva!')
            
        },
        error => {
          alert('Erro ao salvar.')
        } */
      )
   /*  } */
  }

  mostrarEnsinoInfatil($event) {
    //console.log($event);
    this.showInfantil = $event;
    this.showFundamental = false;
    this.showMedio = false;
    this.caixaVazia = false;

  }
  mostrarEnsinoFundamental($event) {
    //console.log($event);
    this.showFundamental = $event;
    this.showInfantil = false;
    this.showMedio = false;
    this.caixaVazia = false;
  }
  mostrarEnsinoMedio($event) {
    //console.log($event);
    this.showMedio = $event;
    this.showInfantil = false;
    this.showFundamental = false;
    this.caixaVazia = false;

  }
  verificaIdade(idadeE: HTMLInputElement){
    const idade = parseInt(idadeE.value);
    if(idade < 0 || idade > 120){
      alert("Por favor, preencha corretamente a idade!");
      this.alunoForm.get('idade').setValue(null);
    }
  }
 

  proximo(){
    this.controlador++

    if(this.controlador == 0){
      this.data = true
    }
    
    if(this.controlador == 1){
      this.data = false
      this.fator1 = true
      this.fator2 = false
    }
    if(this.controlador == 2){
      this.fator1 = false
      this.fator2 = true
    }
    if(this.controlador == 3){
      this.fator2 = false
      this.fator3 = true
    }
    if(this.controlador == 4){
      this.fator3 = false
      this.fator4 = true
    }
    if(this.controlador == 5){
      this.fator4 = false
      this.fator5 = true
    }
    if(this.controlador == 6){
      this.fator5 = false
      this.fator6 = true
    }
    if(this.controlador == 7){
      this.fator6 = false
      this.fator7 = true
    }
    if(this.controlador == 8){
      this.fator7 = false
      this.fator8 = true
    }
    if(this.controlador == 9){
      this.fator8 = false
      this.fator9 = true
    }
    if(this.controlador == 10){
      this.fator9 = false
      this.fator10 = true
    }
    if(this.controlador == 11){
      this.fator10 = false
      this.fator11 = true
    }
    if(this.controlador == 12){
      this.fator11 = false
      this.fator12 = true
    }
    if(this.controlador == 13){
      this.fator12 = false
      this.fator13 = true
    }
    if(this.controlador == 14){
      this.fator13 = false
      this.fator14 = true
    }
    if(this.controlador == 15){
      this.fator14 = false
      this.fator15 = true
    }
    if(this.controlador == 16 ){
      this.fator15 = false
      this.fator16 = true
    }
    if(this.controlador == 17){
      this.fator16 = false
      this.fator17 = true
    }
    if(this.controlador == 18){
      this.fator17 = false
      this.fator18 = true
    }
    if(this.controlador == 19){
      this.fator18 = false
      this.fator19 = true
    }
    if(this.controlador == 20){
      this.fator19 = false
      this.fator20 = true
    }
    if(this.controlador == 21){
      this.fator20 = false
      this.fator21 = true
    }
    if(this.controlador == 22){
      this.fator21 = false
      this.fator22 = true
    }
    if(this.controlador == 23){
      this.fator22 = false
      this.fator23 = true
    }
    if(this.controlador == 24){
      this.fator23 = false
      this.fator24 = true
    }
    if(this.controlador == 25){
      this.fator24 = false
      this.fator25 = true
    }
    if(this.controlador == 26){
      this.fator25 = false
      this.fator26 = true
    }
    if(this.controlador == 27){
      this.fator26 = false
      this.fator27 = true
    }
    if(this.controlador == 28){
      this.fator27 = false
      this.fator28 = true
    }
    if(this.controlador == 29){
      this.fator28 = false
      this.fator29 = true
    }
    if(this.controlador == 30){
      this.fator29 = false
      this.fator30 = true
    }
    if(this.controlador == 31){
      this.fator30 = false
      this.fator31 = true
    }
    if(this.controlador == 32){
      this.fator31 = false
      this.fator32 = true
    }
    if(this.controlador == 33){
      this.fator32 = false
      this.fator33 = true
    }
    if(this.controlador == 34){
      this.fator33 = false
      this.fator34 = true
    }
    if(this.controlador == 35){
      this.fator34 = false
      this.fator35 = true
    }
    if(this.controlador == 36){
      this.fator35 = false
      this.fator36 = true
    }
    if(this.controlador == 37){
      this.fator36 = false
      this.fator37 = true
    }
    if(this.controlador == 38){
      this.fator37 = false
      this.fator38 = true
    }
    if(this.controlador == 39){
      this.fator38 = false
      this.fator39 = true
    }
    if(this.controlador == 40){
      this.fator39 = false
      this.fator40 = true
    }
    if(this.controlador == 41){
      this.fator40 = false
      this.fator41 = true
    }
    if(this.controlador == 42){
      this.fator41 = false
      this.fator42 = true
    }
    if(this.controlador == 43){
      this.fator42 = false
      this.fator43 = true
    }
    if(this.controlador == 44){
      this.fator43 = false
      this.fator44 = true
    }
    if(this.controlador == 45){
      this.fator44 = false
      this.fator45 = true
    }
    if(this.controlador == 46){
      this.fator45 = false
      this.fator46 = true
    }
    
  
    if(this.controlador == 47){
      this.fator46 = false
      this.fator47 = true
    }
    if(this.controlador == 48){
      this.fator47 = false
      this.fator48 = true
    }
    if(this.controlador == 49){
      this.fator48 = false
      this.fator49 = true
    }
    if(this.controlador == 50){
      this.fator49 = false
      this.fator50 = true
    }
    if(this.controlador == 51){
      this.fator50 = false
      this.fator51 = true
    }
    if(this.controlador == 52){
      this.fator51 = false
      this.fator52 = true
    }
    if(this.controlador == 53){
      this.fator52 = false
      this.fator53 = true
    }
    if(this.controlador == 54){
      this.fator53 = false
      this.fator54 = true
    }
    if(this.controlador == 55){
      this.fator54 = false
      this.fator55 = true
    }
    if(this.controlador == 56){
      this.fator55 = false
      this.fator56 = true
    }
    if(this.controlador == 57){
      this.fator56 = false
      this.fator57 = true
    }
    if(this.controlador == 58){
      this.fator57 = false
      this.fator58 = true
    }
    if(this.controlador == 59){
      this.fator58 = false
      this.fator59 = true
    }
    if(this.controlador == 60){
      this.fator59 = false
      this.fator60 = true
    }
    if(this.controlador == 61){
      this.fator60 = false
      this.fator61 = true
    }
    if(this.controlador == 62 ){
      this.fator61 = false
      this.fator62 = true
    }
    if(this.controlador == 63){
      this.fator62 = false
      this.fator63 = true
    }
    if(this.controlador == 64){
      this.fator63 = false
      this.fator64 = true
    }
    if(this.controlador == 65){
      this.fator64 = false
      this.fator65 = true
    }
    if(this.controlador == 66){
      this.fator65 = false
      this.fator66 = true
    }
    if(this.controlador == 67){
      this.fator66 = false
      this.fator67 = true
    }
    if(this.controlador == 68){
      this.fator67 = false
      this.fator68 = true
    }
    if(this.controlador == 69){
      this.fator68 = false
      this.fator69 = true
    }
    if(this.controlador == 70){
      this.fator69 = false
      this.fator70 = true
    }
    if(this.controlador == 71){
      this.fator70 = false
      this.fator71 = true
    }
    if(this.controlador == 72){
      this.fator71 = false
      this.fator72 = true
    }
    if(this.controlador == 73){
      this.fator72 = false
      this.fator73 = true
    }
    if(this.controlador > 73){
      this.controlador = 73;
    }
  }


  anterior(){
    this.controlador--
    //console.log(this.controlador)
    
    if(this.controlador == 1){
      this.fator1 = true
      this.fator2 = false
    }
    if(this.controlador == 2){
      this.fator3 = false
      this.fator2 = true
    }
    if(this.controlador == 3){
      this.fator4 = false
      this.fator3 = true

    }
    if(this.controlador == 4){
      this.fator5 = false
      this.fator4 = true
    }
    if(this.controlador == 5){
      this.fator6 = false
      this.fator5 = true
    }
    if(this.controlador == 6){
      this.fator7 = false
      this.fator6 = true
    }
    if(this.controlador == 7){
      this.fator8 = false
      this.fator7 = true
    }
    if(this.controlador == 8){
      this.fator9 = false
      this.fator8 = true
    }
    if(this.controlador == 9){
      this.fator10 = false
      this.fator9 = true
    }
    if(this.controlador == 10){
      this.fator11 = false
      this.fator10 = true
    }
    if(this.controlador == 11){
      this.fator12 = false
      this.fator11 = true
    }
    if(this.controlador == 12){
      this.fator13 = false
      this.fator12 = true
    }
    if(this.controlador == 13){
      this.fator14 = false
      this.fator13 = true
    }
    if(this.controlador == 14){
      this.fator15 = false
      this.fator14 = true
    }
    if(this.controlador == 15){
      this.fator16 = false
      this.fator15 = true
    }
    if(this.controlador == 16 ){
      this.fator17 = false
      this.fator16 = true
    }
    if(this.controlador == 17){
      this.fator18 = false
      this.fator17 = true
    }
    if(this.controlador == 18){
      this.fator19 = false
      this.fator18 = true
    }
    if(this.controlador == 19){
      this.fator20 = false
      this.fator19 = true
    }
    if(this.controlador == 20){
      this.fator21 = false
      this.fator20 = true
    }
    if(this.controlador == 21){
      this.fator22 = false
      this.fator21 = true
    }
    if(this.controlador == 22){
      this.fator23 = false
      this.fator22 = true
    }
    if(this.controlador == 23){
      this.fator24 = false
      this.fator23 = true
    }
    if(this.controlador == 24){
      this.fator25 = false
      this.fator24 = true
    }
    if(this.controlador == 25){
      this.fator26 = false
      this.fator25 = true
    }
    if(this.controlador == 26){
      this.fator27 = false
      this.fator26 = true
    }
    if(this.controlador == 27){
      this.fator28 = false
      this.fator27 = true
    }
    if(this.controlador == 28){
      this.fator29 = false
      this.fator28 = true
    }
    if(this.controlador == 29){
      this.fator30 = false
      this.fator29 = true
    }
    if(this.controlador == 30){
      this.fator31 = false
      this.fator30 = true
    }
    if(this.controlador == 31){
      this.fator32 = false
      this.fator31 = true
    }
    if(this.controlador == 32){
      this.fator33 = false
      this.fator32 = true
    }
    if(this.controlador == 33){
      this.fator34 = false
      this.fator33 = true
    }
    if(this.controlador == 34){
      this.fator35 = false
      this.fator34 = true
    }
    if(this.controlador == 35){
      this.fator36 = false
      this.fator35 = true
    }
    if(this.controlador == 36){
      this.fator37 = false
      this.fator36 = true
    }
    if(this.controlador == 37){
      this.fator38 = false
      this.fator37 = true
    }
    if(this.controlador == 38){
      this.fator39 = false
      this.fator38 = true
    }
    if(this.controlador == 39){
      this.fator40 = false
      this.fator39 = true
    }
    if(this.controlador == 40){
      this.fator41 = false
      this.fator40 = true
    }
    if(this.controlador == 41){
      this.fator42 = false
      this.fator41 = true
    }
    if(this.controlador == 42){
      this.fator43 = false
      this.fator42 = true
    }
    if(this.controlador == 43){
      this.fator44 = false
      this.fator43 = true
    }
    if(this.controlador == 44){
      this.fator45 = false
      this.fator44 = true
    }
    if(this.controlador == 45){
      this.fator46 = false
      this.fator45 = true
    }

    if(this.controlador == 46){
      this.fator47 = true
      this.fator46 = false
    }
    if(this.controlador == 47){
      this.fator48 = false
      this.fator47 = true
    }
    if(this.controlador == 48){
      this.fator49 = false
      this.fator48 = true

    }
    if(this.controlador == 49){
      this.fator50 = false
      this.fator49 = true
    }
    if(this.controlador == 50){
      this.fator51 = false
      this.fator50 = true
    }
    if(this.controlador == 51){
      this.fator52 = false
      this.fator51 = true
    }
    if(this.controlador == 52){
      this.fator53 = false
      this.fator52 = true
    }
    if(this.controlador == 53){
      this.fator54 = false
      this.fator53 = true
    }
    if(this.controlador == 54){
      this.fator55 = false
      this.fator54 = true
    }
    if(this.controlador == 55){
      this.fator56 = false
      this.fator55 = true
    }
    if(this.controlador == 56){
      this.fator57 = false
      this.fator56 = true
    }
    if(this.controlador == 57){
      this.fator58 = false
      this.fator57 = true
    }
    if(this.controlador == 58){
      this.fator59 = false
      this.fator58 = true
    }
    if(this.controlador == 59){
      this.fator60 = false
      this.fator59 = true
    }
    if(this.controlador == 60){
      this.fator61 = false
      this.fator60 = true
    }
    if(this.controlador == 61){
      this.fator62 = false
      this.fator61 = true
    }
    if(this.controlador == 62){
      this.fator63 = false
      this.fator62 = true
    }
    if(this.controlador == 63){
      this.fator64 = false
      this.fator63 = true
    }
    if(this.controlador == 64){
      this.fator65 = false
      this.fator64 = true
    }
    if(this.controlador == 65){
      this.fator66 = false
      this.fator65 = true
    }
    if(this.controlador == 66){
      this.fator67 = false
      this.fator66 = true
    }
    if(this.controlador == 67){
      this.fator68 = false
      this.fator67 = true
    }
    if(this.controlador == 68){
      this.fator69 = false
      this.fator68 = true
    }
    if(this.controlador == 69){
      this.fator70 = false
      this.fator69 = true
    }
    if(this.controlador == 70){
      this.fator71 = false
      this.fator70 = true
    }
    if(this.controlador == 71){
      this.fator72 = false
      this.fator71 = true
    }
    if(this.controlador == 72){
      this.fator73 = false
      this.fator72 = true
    }
    if(this.controlador < 0){
      this.controlador = 1;
    }
  }
      data:boolean = true;
      fator1:boolean = false;
      fator2: boolean = false;
      fator3: boolean = false;
      fator4: boolean = false;
      fator5: boolean = false;
      fator6: boolean = false;
      fator7: boolean = false;
      fator8: boolean = false;
      fator9: boolean = false;
      fator10: boolean = false;
      fator11: boolean = false;
      fator12: boolean = false;
      fator13: boolean = false;
      fator14: boolean = false;
      fator15: boolean = false;
      fator16: boolean = false;
      fator17: boolean = false;
      fator18: boolean = false;
      fator19: boolean = false;
      fator20: boolean = false;
      fator21: boolean = false;
      fator22: boolean = false;
      fator23: boolean = false;
      fator24:boolean = false;
      fator25: boolean = false;
      fator26: boolean = false;
      fator27: boolean = false;
      fator28: boolean = false;
      fator29: boolean = false;
      fator30: boolean = false;
      fator31: boolean = false;
      fator32: boolean = false;
      fator33: boolean = false;
      fator34: boolean = false;
      fator35: boolean = false;
      fator36: boolean = false;
      fator37: boolean = false;
      fator38: boolean = false;
      fator39: boolean = false;
      fator40: boolean = false;
      fator41: boolean = false;
      fator42: boolean = false;
      fator43: boolean = false;
      fator44: boolean = false;
      fator45: boolean = false;
      fator46: boolean = false;
      fator47:boolean = false;
      fator48: boolean = false;
      fator49: boolean = false;
      fator50: boolean = false;
      fator51: boolean = false;
      fator52: boolean = false;
      fator53: boolean = false;
      fator54: boolean = false;
      fator55: boolean = false;
      fator56: boolean = false;
      fator57: boolean = false;
      fator58: boolean = false;
      fator59: boolean = false;
      fator60: boolean = false;
      fator61: boolean = false;
      fator62: boolean = false;
      fator63: boolean = false;
      fator64: boolean = false;
      fator65: boolean = false;
      fator66: boolean = false;
      fator67: boolean = false;
      fator68: boolean = false;
      fator69: boolean = false;
      fator70:boolean = false;
      fator71: boolean = false;
      fator72: boolean = false;
      fator73: boolean = false;
      verifique: boolean = true;

      mostrar(){
        this.fator1 = true;
        this.fator2  = true;
        this.fator3  = true;
        this.fator4 = true;
        this.fator5  = true;
        this.fator6 = true;
        this.fator7  = true;
        this.fator8  = true;
        this.fator9  = true;
        this.fator10  = true;
        this.fator11  = true;
        this.fator12  = true;
        this.fator13  = true;
        this.fator14  = true;
        this.fator15  = true;
        this.fator16  = true;
        this.fator17  = true;
        this.fator18  = true;
        this.fator19  = true;
        this.fator20  = true;
        this.fator21  = true;
        this.fator22  = true;
        this.fator23  = true;
        this.fator24 = true;
        this.fator25  = true;
        this.fator26  = true;
        this.fator27  = true;
        this.fator28  = true;
        this.fator29  = true;
        this.fator30  = true;
        this.fator31  = true;
        this.fator32  = true;
        this.fator33  = true;
        this.fator34  = true;
        this.fator35  = true;
        this.fator36  = true;
        this.fator37  = true;
        this.fator38  = true;
        this.fator39  = true;
        this.fator40  = true;
        this.fator41  = true;
        this.fator42  = true;
        this.fator43 = true;
        this.fator44  = true;
        this.fator45  = true;
        this.fator46  = true;
        this.fator47= true;
        this.fator48 = true;
        this.fator49  = true;
        this.fator50 = true;
        this.fator51  = true;
        this.fator52 = true;
        this.fator53 = true;
        this.fator54 = true;
        this.fator55 = true;
        this.fator56  = true;
        this.fator57  = true;
        this.fator58  = true;
        this.fator59  = true;
        this.fator60  = true;
        this.fator61  = true;
        this.fator62  = true;
        this.fator63  = true;
        this.fator64  = true;
        this.fator65  = true;
        this.fator66  = true;
        this.fator67  = true;
        this.fator68  = true;
        this.fator69  = true;
        this.fator70 = true;
        this.fator71  = true;
        this.fator72  = true;
        this.fator73  = true;

        this.verifique = false;
      }

}
