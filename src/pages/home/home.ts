import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResiduoProvider } from '../../providers/residuo/residuo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  residuos = [];

  constructor(public navCtrl: NavController,
    private servicioResiduos: ResiduoProvider
    ) {
  }
  ionViewDidLoad(){
    this.servicioResiduos.obtenerResiduos().subscribe(
      (datos: any[]) => {
        console.log(datos);
        this.residuos = datos;
      }
    );
  }

}
