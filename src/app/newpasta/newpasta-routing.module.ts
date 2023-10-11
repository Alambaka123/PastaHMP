import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { NewpastaPage } from './newpasta.page';

const routes: Routes = [
  {
    path: '',
    component: NewpastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpastaPageRoutingModule {}
