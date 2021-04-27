import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('../tab1-map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'visits',
        loadChildren: () => import('../tab2-visits/visits.module').then(m => m.VisitsPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../tab3-list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../tab4-more/more.module').then(m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
