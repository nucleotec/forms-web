import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from '../aluno.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from '../aluno';
import { Score } from './score';
import { CadastroPaciente } from '../cadastro-paciente/cadastro-paciente';

import {
  /* grafico donut */
  /* ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend */
  /* Fim grafico donut */

  /* grafico linha */
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
  /* Fim grafico linha */
} from "ng-apexcharts";
import { clear } from 'console';
import { UserService } from 'src/app/core/user/user.service';

export type ChartOptions = {

  /* grafico donut */
  /* series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels; */
  /* fim grafico dunut */

  /* grafico linha */
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  /* fim grafico linha */
};

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  ListaScore: Score[] = [];
  alunoForm: FormGroup
  prob: String;
  grafico:boolean = false;
  grafico1:boolean = true;
  menu:boolean = true;
  ocult:boolean = true;
  ListaPacientes: CadastroPaciente[] = [];
  PacienteForm: FormGroup
  searchText?:any;
  searchAno?:any;
  te;
  elemento;
  perfil;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  
  textButton: string = "Ocultar dados";
  pacienteEsp: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AlunoService: AlunoService,
    private userService: UserService
  ) { this.chartOptions = {
    series: [

    ],
    chart: {
      height: 200,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Gráfico Score do Paciente ",
      align: "center"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [

      ]
    }
  };
}

  ngOnInit() {
    
    this.score();
    /* this.perfil = this.userService.getUser()
    console.log("UEPA",this.perfil) */
    //
    /* this.alunoForm = this.formBuilder.group({
      pesquisarTodos: ['']
    }) */

    this.pesquisaTodos();

    this.PacienteForm = this.formBuilder.group({
      pesquisarTodos: ['']
    })//
  }
  
  pesquisaTodos() {
    this.AlunoService.getAllPacientes().subscribe(result => {
      this.ListaPacientes = result;
      //console.log("Pacientes:", this.ListaPacientes)
    })
    
  }
  
  score() {
    this.AlunoService.score().subscribe(result => {
    this.ListaScore = result;
    //console.log("Consultas:", this.ListaScore);
    })
  }


  verProbabilidade(id) {
    this.router.navigate(['/prob', id])
  }

  verGrafico(id) {
    
     this.router.navigate(['/score', id]) 
      
  }

  editarAluno(id) {
    this.router.navigate(['/avaliar/paciente', id])
  }

  valorAtual() {
    var valores = []
    var data = []
    for (let i = 0; i < this.ListaScore.length; i++) {
      valores.push(Number(this.ListaScore[i].scoreFinal).toFixed(2))
      data.push(this.ListaScore[i].data)
    }
    this.chartOptions.series = [{ data: [...valores]}]
    this.chartOptions.xaxis = {categories: data}

    this.grafico = true;
    this.grafico1 = false;
    this.menu = false;
    
  }

  carregamento(id){
    this.porid(id)
    
  }
  porid(id){
    
    //this.router.navigate(['grafico/paciente', id])
    this.AlunoService.getById2(id).subscribe(result => {
    if(result.length != 0){
      this.ListaScore = result;
      this.pacienteEsp = this.ListaScore[0].nome;
      this.valorAtual();
    }
    else{
      alert("Este paciente ainda não realizou consultas.");
    }
    
    })
    
  }

  limpar(){
    clearInterval(this.te);
  }

  ocultarDados(){
    this.ocult = false;
    this.ocult = null;
  }
  MostrarDados(){
    /* this.ocult = true; */
    if(this.ocult){
      this.ocult = false;
      this.textButton = "Mostrar dados";
    }
    else{
      this.ocult = true;
      this.textButton = "Ocultar dados";
    }
  }

  limparNavegacao(){
    window.location.reload();
    this.limpar()
    this.router.navigate(['grafico/paciente', ''])
    this.router.navigate(['score'])
    this.menu = true;

  }


  
}
