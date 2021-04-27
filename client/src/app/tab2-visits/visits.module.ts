import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitsPage } from './visits.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VisitsPageRoutingModule } from './visits-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VisitsPageRoutingModule
  ],
  declarations: [VisitsPage]
})
export class VisitsPageModule {}
