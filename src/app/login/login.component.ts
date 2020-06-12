import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {};
  usrConectado: boolean;

  constructor(private firebase: FirebaseService) {
  }

  ngOnInit(): void {
    this.firebase.getUsuarioConectado().subscribe((user: firebase.User) => {
      if (user) {
        this.usuario.nombre = user.displayName;
        this.usuario.email = user.email;
        this.usuario.uid = user.uid;
        this.usrConectado = true;
        console.log(this.usuario);
      } else {
        this.usuario = {};
        this.usrConectado = false;
      }
    });
  }

  loguear(correo: string, passwd: string) {
    console.log(correo, passwd);
    this.firebase.emailPasswdLogin(correo, passwd);
  }

  logout() {
    this.firebase.logout();
    console.log(this.usrConectado);
  }
}
