import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniMaestroPageRoutingModule } from './ini-maestro-routing.module';

import { IniMaestroPage } from './ini-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniMaestroPageRoutingModule
  ],
  declarations: [IniMaestroPage]
})
export class IniMaestroPageModule {}
