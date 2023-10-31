import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Categoria } from "./categoria";


const API = 'http://localhost:8080/api';

@Injectable({providedIn : 'root'})
export class CategoriaService{

constructor(private Http: HttpClient){}



get(id:string){
    console.log("get:id");
    return this.Http.get<Categoria>(API+  '/categoria/' + id );
}



getList(){
    console.log("get.list");
    return  this.Http
    .get<Categoria[]>(API+ '/categoria/lista');
}



}