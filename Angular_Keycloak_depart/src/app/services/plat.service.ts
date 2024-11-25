import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class PlatService {
  apiURL: string = 'http://localhost:8080/plats/api/all';


  produits! : Plat[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listePlats(): Observable<Plat[]>{
    return this.http.get<Plat[]>(this.apiURL);
    }

  

     
       
}