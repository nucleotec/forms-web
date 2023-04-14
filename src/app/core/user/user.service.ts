import { Injectable } from '@angular/core';
import * as jtw_decode from 'jwt-decode';

import { User } from './user';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { Users } from 'src/app/aluno/cadastro-user/User';

const API = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class UserService{

    user: User;

    // assim que inicia o serviço, verifica se existe o token e faz a decodificação
    constructor(private tokenService: TokenService, private http: HttpClient,){
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.user;
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        this.user = jtw_decode(token) as User;
    }

    logout(){
        this.tokenService.removeToken();
        this.user = null;
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

      
    create(aluno: Users) {
        return this.http.post(`${API}logon/create`, aluno).pipe(take(1));
      }

    getAll(): Observable<Users[]>{
         return this.http.get<Users[]>(`${API}logon/user/getall`);
       }

    getByIdUser(id) {
        if (!id) return EMPTY;
        return this.http.get<Users>(`${API}logon/user/get/${id}`);
      }

      updateUser(update) {
        return this.http.put(`${API}logon/user/update/${update.id}`, update).pipe(take(1));
      }

      delete(id) {
        return this.http.delete<Users[]>(`${API}logon/user/delete/${id}`);
      }
      
}