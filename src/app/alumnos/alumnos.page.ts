import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  ests : any;
  nombre  : String;
  apellido: String;
  correo  : String;
  mensaje : String;
  constructor(private alertController: AlertController,
    private toastController: ToastController, private router:Router) { 
    this.ests = [
      {
        id    : 2,
        nombre: 'Alumno Duoc uc ',
        foto  : 'https://cfvod.kaltura.com/p/3457153/sp/345715300/thumbnail/entry_id/1_oe72p6ar/version/100001/width/412/height/248'
      }
    ];
   }

ngOnInit() {
}
async grabar(nom: HTMLInputElement, ape: HTMLInputElement, correo: HTMLInputElement)
{
  if(nom.value == "")
  {
    const toast = await this.toastController.create({
      message : "Falta escribir el nombre",
      duration: 2000
    })
    toast.present();
  }
  else if(ape.value == "")
  {
    const toast = await this.toastController.create({
      message : "Falta escribir el apellido",
      duration: 2000
    })
    toast.present();
  }
  else if(correo.value == "")
  {
    const toast = await this.toastController.create({
      message : "Falta escribir el correo",
      duration: 2000
    })
    toast.present();
  }
  else
  {
    this.router.navigate(['/camera']);
    };
  }
}
