import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core'
import { Observable } from "rxjs";


import { Categoria } from "../categoria/categoria";
import { CategoriaService } from "../categoria/categora.service";


@Injectable({ providedIn: 'root'})
export class CategoriaListResolver implements Resolve<Observable<Categoria[]>>{

    constructor(private service: CategoriaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Categoria[]> {
        console.log("CategoriaListResolver");
        return this.service.getList();
    }
}