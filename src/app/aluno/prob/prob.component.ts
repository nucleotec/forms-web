import { Score } from './../score/score';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Aluno } from '../aluno';
import {AlunoService} from '../aluno.service'
@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.css']
})
export class ProbComponent implements OnInit {

  alunoForm: FormGroup
  showInfantil = false;
  showFundamental = false;
  showMedio = false;
  caixaVazia = true;
  elemento;
  prob;

  riscobaixo = false;
  riscobaixomedio = false;
  riscomedioalo = false;
  riscoalto = false;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private AlunoService: AlunoService,
    private router: Router,
  ) { }

  ngOnInit(): void {


    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.AlunoService.getByIdScore(id))
      )
      .subscribe(score => this.editarForm(score)
      );

    this.alunoForm = this.formBuilder.group(
      
      {
      id: [null],
      nome: ['', Validators.required],
      soma: ['', Validators.required],
      media: ['', Validators.required],
      scoreFinal: ['', Validators.required],
    });
    
  }

  editarForm(aluno: Score) {

    this.alunoForm.patchValue(
      {
        id: aluno[0].id,
        nome: aluno[0].nome,
        soma: aluno[0].soma,
        media: aluno[0].media,
        scoreFinal: aluno[0].scoreFinal,
      }
    )
    this.carregar();
  }

  carregar(){
    for(var i = 0; i < 1000; i++){
      i++;
      //console.log(i)
      if(i > 800){
        this.situacao()
      }
    }
   
  }

  verid(){
    let elemento = (<HTMLInputElement>document.getElementById("id")).value;
    console.log(elemento)
    this.router.navigate(['/avaliacao-paciente', elemento])
  }


  preencheCampos(aluno: Score) {
    this.alunoForm.patchValue(
      {
        nome: aluno.nome,
        soma: aluno.soma,
        media: aluno.media,
        scoreFinal: aluno.scoreFinal,
      });
      
  }

   situacao(){
    this.elemento = (<HTMLInputElement>document.getElementById("score")).value;

    //console.log(this.elemento)

    if(this.elemento > -150 && this.elemento < -60.5){
       //console.log('Aqui')
       this.prob = "Risco baixo";

       this.riscobaixo = true;
       this.riscobaixomedio = false;
       this.riscomedioalo = false;
       this.riscoalto = false;
    } 
    else  
    
    if(this.elemento >= -60.5 && this.elemento < 29){
      this.prob = "Risco baixo-médio";
      //console.log(this.prob)
      this.riscobaixo = false;
       this.riscobaixomedio = true;
       this.riscomedioalo = false;
       this.riscoalto = false;
    }  
     else  

     if(this.elemento >= 29 && this.elemento < 118.5){
      this.prob = "Risco médio-alto";
      //console.log(this.prob)
      this.riscobaixo = false;
       this.riscobaixomedio = false;
       this.riscomedioalo = true;
       this.riscoalto = false;
    }  
    else  

    if(this.elemento >= 118.5 && this.elemento <= 208){
      this.prob = "Risco alto";
      //console.log(this.prob)
      this.riscobaixo = false;
       this.riscobaixomedio = false;
       this.riscomedioalo = false;
       this.riscoalto = true;
    }
  } 
  troca(conduta){
    /* let c = "testando"
    console.log("HERE", conduta); */
    this.router.navigate(["conduta", conduta])
    
  }
   
}
