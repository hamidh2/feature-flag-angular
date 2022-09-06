import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureFlagModule } from './shared/dicrectives/feature-flag/feature-flag.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeatureFlagModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
