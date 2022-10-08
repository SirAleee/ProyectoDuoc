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
  nombre  : String;
  apellido: String;
  correo  : String;
  mensaje : String;
  
  constructor(private alertController: AlertController,
    private toastController: ToastController, private router:Router) {
      this.pumas = [
        {
          id    : 1,
          nombre: 'Profesor Walter White ',
          foto  : 'https://i.pinimg.com/474x/53/ab/b1/53abb17e44791c1d4cb0dbcf5e672c75.jpg'
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
      this.router.navigate(['/ini-maestro']);
      };
    }
  }
