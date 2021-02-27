import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourSpacesPage } from './your-spaces.page';

const routes: Routes = [
  {
    path: '',
    component: YourSpacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourSpacesPageRoutingModule {}
