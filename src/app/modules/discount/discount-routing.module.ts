import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail/detail.component';
import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'detail', component: DetailComponent },
  {
    path: '**',
    component: IndexComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountRoutingModule {}
