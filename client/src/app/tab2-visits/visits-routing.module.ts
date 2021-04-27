import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitsPage } from './visits.page';

const routes: Routes = [
  {
    path: '',
    component: VisitsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsPageRoutingModule {}
