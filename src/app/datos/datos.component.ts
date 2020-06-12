import { FirebaseService } from './../services/firebase.service';
import { Articulo } from './../models/articulo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(private firebase: FirebaseService) {
    this.firebase.cargarArticulos().subscribe((res: Articulo[]) => {
      this.articulos = res;
      console.log('Res: ', res);
    });
  }

  ngOnInit(): void {
  }

  agregarObjeto(nom: string, cant: string, col: string){
    const art: Articulo = {
      nombre: nom,
      cantidad: cant,
      color: col
    };

    this.firebase.agregarArticulo(art);
  }

}
