import { element } from 'protractor';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service'
import { Chart } from 'chart.js';
import { CadastroPaciente } from '../cadastro-paciente/cadastro-paciente';
import { geteuid } from 'process';
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
  selector: 'app-pesquisa-paciente',
  templateUrl: './pesquisa-paciente.component.html',
  styleUrls: ['./pesquisa-paciente.component.css']
})
export class PesquisaPacienteComponent implements OnInit {

  ListaPacientes: CadastroPaciente[] = [];
  PacienteForm: FormGroup
  searchText?: any;
  te;
  selecionado:boolean = true;
  btnVer:boolean = false;
  btnOcultar:boolean = false;
  grafico:boolean = false;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AlunoService: AlunoService,
    private route: ActivatedRoute,
  ) { 
    
    this.chartOptions = {
      series: [

      ],
      chart: {
        height: 300,
        width: 800,
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
        text: "Valor por Aluno",
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
  
    /* this.pesquisaTodos() */
    
  }

 /*  valorAtual() {
    var valores = []
    var nome  = []
    for (let i = 0; i < this.ListaPacientes.length; i++) {

      valores.push(this.ListaPacientes[i].dataNascimento)
      nome.push(this.ListaPacientes[i].nome)

    }
    
    this.chartOptions.series = [{ data: eval("valores") }]
    this.chartOptions.xaxis = {categories: nome}

  } */

 /*  carregamento(id)
  {
    this.btnVer = true;
    this.selecionado = false;
    alert("O gráfico será carregado! Aguarde!")
    this.Teste(id)
    this.grafico = true
  }

  Teste(id){
   this.te = setInterval(() => this.porid(id), 2500)
   this.porid(id)
  } 
   */
/*   porid(id){
    
    this.router.navigate(['/grafico/paciente', id])
    this.AlunoService.getById2(id).subscribe(result => { this.ListaPacientes = result })
     this.valorAtual() 
  } */

  /* verDados(){
    this.selecionado = true;
    this.btnVer = false;
    this.btnOcultar = true
  }
  fecharDados(){
    this.selecionado = false;
    this.btnOcultar = false;
    this.btnVer = true;
  }


  pesquisaTodos() {
    this.AlunoService.getAllPacientes().subscribe(result => { this.ListaPacientes = result })
   
  }

  limpar(){

    clearInterval(this.te);

  }

  editarAluno(id) {
    this.router.navigate(['/cadastro/paciente', id]),
      (<HTMLInputElement>document.getElementById("dataNascimento")).value;
  }

  deletarAluno(id) {

    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      this.AlunoService.deletePaciente(id).subscribe(result => { this.ListaPacientes = result; })
      alert('Aluno excluído.')
      window.location.reload();
    }

  } */

  


}



