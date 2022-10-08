import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniMaestroPage } from './ini-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: IniMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniMaestroPageRoutingModule {}
