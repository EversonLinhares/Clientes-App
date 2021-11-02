import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';
  constructor( private http: HttpClient) {
    
   }
  
   salvar( cliente: Cliente ) : Observable<Cliente> {
        return this.http.post<Cliente>(`${this.apiURL}` , cliente);
   }
   atualizar( cliente: Cliente ) : Observable<any> {
        return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}` , cliente);
   }
   
   getClientes() :Observable<Cliente[]> {
     return this.http.get<Cliente[]>(`${this.apiURL}`);
   }
   /*getClientes() : Cliente[]{
     let cliente = new Cliente();
     cliente.id= 1;
     cliente.nome= "fulano";
     cliente.cpf= "11122233344";
     cliente.dataCadastro= "24/01/1996";
     return [cliente]
   }*/

   getClienteById(id: number): Observable<Cliente>{
     return this.http.get<any>(`${this.apiURL}/${id}`);
   }
   deletar(cliente: Cliente) :Observable<any>{
     return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
   }

}
