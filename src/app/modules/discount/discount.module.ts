import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountRoutingModule } from './discount-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DiscountRoutingModule
  ]
})
export class DiscountModule { }
