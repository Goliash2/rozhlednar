import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapPage } from './map.page';

import { MapPageRoutingModule } from './map-routing.module';

import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapPageRoutingModule,
    LeafletModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
