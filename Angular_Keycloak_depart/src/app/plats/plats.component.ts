import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-produits',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

     plats! : Plat[]; //un tableau de Produit
     
     constructor(private platService: PlatService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerPlats();
      }
    
      chargerPlats(){
        this.platService.listePlats().subscribe((prods) => {
          console.log(prods);
          this.plats = prods;
        });
      }
   

 
  

}
