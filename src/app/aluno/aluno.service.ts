import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Aluno } from './aluno';
import { CadastroPaciente } from './cadastro-paciente/cadastro-paciente';
import { Score } from './score/score';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../core/user/user.service';
import { userInfo } from 'os';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private http: HttpClient,
    private user: UserService
  ) { }

  


  /* getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${API}aluno`);
  }
 */
  getAll(): Observable<Aluno[]>{
   let usuario = this.user.user.usuario
   //console.log(usuario)
    return this.http.get<Aluno[]>(`${API}aluno/user/`);
  }

  getAllPacientes(): Observable<CadastroPaciente[]> {
    
    let usuario = this.user.user.usuario
    let perfil = this.user.user.perfil

    //console.log(perfil)

    if(perfil == 'adm'){
      return this.http.get<CadastroPaciente[]>(`${API}cadastroPaciente`);
    }
    else{
      
      return this.http.get<CadastroPaciente[]>(`${API}cadastroPaciente/paciente/userid/${usuario}`);
    }
  }
  /* getAllPacientes(): Observable<CadastroPaciente[]> {
    
    let usuario = this.user.user.usuario
    let perfil = this.user.user.perfil

    console.log(perfil)

    if(perfil == 'adm'){
      return this.http.get<CadastroPaciente[]>(`${API}paciente`);
    }
    else{
      
      return this.http.get<CadastroPaciente[]>(`${API}paciente/${usuario}`);
    }
  } */

  score(): Observable<Score[]> {
    let usuario = this.user.user.usuario
    let perfil = this.user.user.perfil


    if(perfil == 'adm'){
      
      return this.http.get<Score[]>(`${API}score/`);/* here */
    }
    else{
      return this.http.get<Score[]>(`${API}score/user/${usuario}`);
    }
    /* let usuario = this.user.user.usuario
    return this.http.get<Score[]>(`${API}score/user/${usuario}`); */
  }

  /* score(): Observable<Score[]> {
    let usuario = this.user.user.usuario
    return this.http.get<Score[]>(`${API}aluno/score/user/${usuario}`);
  } */

  create(aluno: Aluno) {
    return this.http.post(`${API}avaliar`, aluno).pipe(take(1));
  }
  createprotecao(aluno: Aluno) {
    return this.http.post(`${API}avaliar/protecao`, aluno).pipe(take(1));
  }

 /*  create(aluno: Aluno) {
    return this.http.post(`${API}aluno`, aluno).pipe(take(1));
  } */

  createPaciente(paciente: CadastroPaciente) {
    return this.http.post(`${API}cadastroPaciente`, paciente).pipe(take(1));
  }
  /* createPaciente(paciente: CadastroPaciente) {
    return this.http.post(`${API}cadastro/paciente`, paciente).pipe(take(1));
  } */

  getById(id) {
    if (!id) return EMPTY;
    return this.http.get<Aluno>(`${API}aluno/${id}`);
  }

  getByIdCadastroAvaliar(id) {
    if (!id) return EMPTY;
    return this.http.get<Aluno>(`${API}cadastroPaciente/${id}`);
  }

  //relatorio do paciente
  getByIdCadastroAvaliacao(id) {
    if (!id) return EMPTY;
    return this.http.get<Aluno>(`${API}avaliar/avaliacaoPaciente/${id}`);
  }

  /* getByIdCadastroAvaliar(id) {
    if (!id) return EMPTY;
    return this.http.get<Aluno>(`${API}cadastro/paciente/${id}`);
  } */

   getById2(id): Observable<Score[]>{
    if (!id) return EMPTY;
    return this.http.get<Score[]>(`${API}score/paciente/score/${id}`);
  } 

   /* getById2(id): Observable<Score[]>{
    if (!id) return EMPTY;
    return this.http.get<Score[]>(`${API}aluno/${id}`);
  }  */

  getByIdScore(id) {

    if (!id) return EMPTY;
    return this.http.get<Score>(`${API}score/${id}`);
  }

 /*  getByIdScore(id) {
    if (!id) return EMPTY;
    return this.http.get<Score>(`${API}aluno/score/${id}`);
  } */

/* Captura para Editar o cadastro do paciente */
  getByIdPaciente(id) {
    if (!id) return EMPTY;
    return this.http.get<CadastroPaciente>(`${API}cadastroPaciente/${id}`);
  }
  
/* Faz o update do cadastro do paciente */
updatePaciente(update) {
  return this.http.put(`${API}cadastroPaciente/${update.id}`, update).pipe(take(1));
}

/*Deletar cadastro do paciente*/
deletePaciente(id) {
  return this.http.delete<CadastroPaciente[]>(`${API}cadastroPaciente/${id}`);
}

  /* Editar o paciente */
  /* getByIdPaciente(id) {
    if (!id) return EMPTY;
    return this.http.get<CadastroPaciente>(`${API}cadastro/paciente/${id}`);
  } */

  update(update) {
    //console.log(update)
    return this.http.put(`${API}aluno/${update.id}`, update).pipe(take(1));
  }

  

 /*  updatePaciente(update) {
    return this.http.put(`${API}aluno/paciente/${update.id}`, update).pipe(take(1));
  } */

  delete(id) {
    return this.http.delete<Aluno[]>(`${API}aluno/${id}`);
  }

  
  
  sendEmail(aluno: Aluno){
    return this.http.post(`${API}email`, aluno)
  }

  
  
}
