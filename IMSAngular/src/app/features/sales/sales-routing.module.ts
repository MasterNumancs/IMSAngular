import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesListComponent } from './list/sales-list.component';
import { SalesInComponent } from './sales-in/sales-in.component';
import { SalesOutComponent } from './sales-out/sales-out.component';

const routes: Routes = [
  {
    path: '',
    component: SalesListComponent
  },
  {
    path: 'sales-in',
    component: SalesInComponent
  },
  {
    path: 'sales-out',
    component: SalesOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}