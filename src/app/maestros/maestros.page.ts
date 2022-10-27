import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})
export class MaestrosPage implements OnInit {
  pumas : any;

  correo    : any;
  password   : any;
  mensaje : String;
  
  constructor(private alertController: AlertController,
    private toastController: ToastController, private router:Router) {
    this.pumas = [
      {
        id    : 1,
        nombre: 'Profesor Duoc uc ',
        foto  : 'https://cfvod.kaltura.com/p/3457153/sp/345715300/thumbnail/entry_id/1_oe72p6ar/version/100001/width/412/height/248'
      }
    ];
   }

ngOnInit() {
}
async link(correo: HTMLInputElement, password: HTMLInputElement)
{
  if(correo.value == "")
  {
    
    const toast = await this.toastController.create({
      
      message : "Ingrese el nombre del usuario",
      duration: 1000
    })
    toast.present();
    return;
  }

  else if(password.value == "")
  {
    const toast = await this.toastController.create({
      message : "Ingrese contraseña",
      duration: 1000
    })
    toast.present();
    return;
  }
  else if(correo.value != "Walter@duocuc.cl")
  {
    const toast = await this.toastController.create({
      message : "Usuario invalido",
      duration: 1000
    })
    toast.present();
    return;
  }
  else if(password.value != "1234")
  {
    const toast = await this.toastController.create({
      message : "Contraseña invalida",
      duration: 1000
    })
    toast.present();
    return;
  }

  else if(correo.value == "Walter@duocuc.cl", password.value == "1234")
  {
    this.router.navigate(['/ini-maestro']);
    };
  }
}
