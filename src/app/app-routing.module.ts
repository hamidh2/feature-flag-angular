import { RouterModule, Routes } from '@angular/router';

import { FeatureGuard } from './shared/guards/feature.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'discount',
    data: { feature: 'discount' },
    canActivate: [FeatureGuard],
    loadChildren: () =>
      import('./modules/discount/discount.module').then(
        (m) => m.DiscountModule
      ),
  },
  {
    path: 'statistics',
    data: { feature: 'statistics' },
    canActivate: [FeatureGuard],
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
