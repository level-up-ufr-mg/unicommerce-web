import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";

const API ='http://localhost:8080/api';

@Injectable({providedIn:'root'})
export class ClienteService{


constructor(private Http:HttpClient){}



get(nome:string){
    console.log("get:nome");
    return this.Http.get<Cliente>(API + '/cliente/' + nome);
}

getLit(){
    console.log("get.list");
    return this.Http.get<Cliente[]>(API + 'cliente/lista');
}

}