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
  
  correo    : any;
  password   : any;
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
async grabar(correo: HTMLInputElement, password: HTMLInputElement)
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
  else if(correo.value != "Jesse@duocuc.cl")
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

  else if(correo.value == "Jesse@duocuc.cl", password.value == "1234")
  {
    this.router.navigate(['/camera']);
    };
  }
}
