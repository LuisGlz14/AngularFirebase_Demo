import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nuevo-usr',
  templateUrl: './nuevo-usr.component.html',
  styleUrls: ['./nuevo-usr.component.css']
})
export class NuevoUsrComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void { }

  crearUsuario(nombre: string, correo: string, passwd: string) {
    console.log(nombre, correo, passwd);
    this.firebase.crearNuevoUsuario(nombre, correo, passwd);
  }

}
