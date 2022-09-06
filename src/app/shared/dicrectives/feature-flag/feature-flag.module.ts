import { CommonModule } from '@angular/common';
import { FeatureFlagDirective } from './feature-flag.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FeatureFlagDirective],
  imports: [CommonModule],
  exports: [FeatureFlagDirective],
})
export class FeatureFlagModule {}
