import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
