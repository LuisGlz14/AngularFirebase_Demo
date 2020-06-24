import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { NuevoUsrComponent } from './nuevo-usr/nuevo-usr.component';
import { DatosComponent } from './datos/datos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevoUsrComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    NgbModule
  ],
  providers: [
    {provide: ORIGIN, useValue: 'http://localhost:5001' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
