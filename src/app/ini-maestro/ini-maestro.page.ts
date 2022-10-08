import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ini-maestro',
  templateUrl: './ini-maestro.page.html',
  styleUrls: ['./ini-maestro.page.scss'],
})
export class IniMaestroPage {
  opciones = [1,2,3];
  opcioness = [4,5,6];
  mensajee  : string;
  gustavos : any;
  constructor(private alertController: ToastController,
    private toastController: ToastController, private router:Router)

    {
    this.gustavos = [
      {
        id    : 20,
        foto  : 'https://i.pinimg.com/736x/09/43/4e/09434ea4f3cf83feef354139f4b1eca1--walter-white-walter-obrien.jpg'
      }
    ];
  }
  ngOnInit() {
  }
   async generar (opciones: HTMLInputElement, opcioness: HTMLInputElement)
  {
    if (opciones.ariaValueNow == "")
    {
      
      const toast = await this.toastController.create({
        message : "Rellene los campos vacios",
        duration: 1000,
      })
      toast.present();
      return;
    }
    
    else if (opcioness.nodeValue == "")
    {
      
      const toast = await this.toastController.create({
        message : "Rellene los campos vacios",
        duration: 1000,
      })
      toast.present();
    }
    else 
    {
      this.router.navigate(['/qr']);
    };            
  } 
}
