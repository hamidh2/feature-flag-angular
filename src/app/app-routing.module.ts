import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'discount',
    loadChildren: () =>
      import('./modules/discount/discount.module').then(
        (m) => m.DiscountModule
      ),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./modules/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
