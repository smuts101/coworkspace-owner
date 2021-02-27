import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourSpacesPageRoutingModule } from './your-spaces-routing.module';

import { YourSpacesPage } from './your-spaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    YourSpacesPageRoutingModule
  ],
  declarations: [YourSpacesPage]
})
export class YourSpacesPageModule {}
