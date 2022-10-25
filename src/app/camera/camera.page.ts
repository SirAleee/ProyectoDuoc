import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {
  ests : any;
  picture: string;
  constructor() {
    this.ests = [
      {
        id    : 2,
        nombre: 'Alumno Jesse Pinkman ',
        foto  : 'https://i.pinimg.com/736x/99/1c/87/991c878d0d164ce7353f7c514e178950--breakin-bad-breaking-bad-jesse.jpg'
      }
    ];
   }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, 
    });

    this.picture = image.dataUrl;
  }

}