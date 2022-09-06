import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { environment } from 'src/environments/environment';

@Directive({
  selector: '[featureFlag]',
})
export class FeatureFlagDirective implements OnInit {
  @Input()
  public featureName: string = '';
  constructor(private _tpl: TemplateRef<any>, private _vcf: ViewContainerRef) {}

  ngOnInit(): void {
    const feature = environment.features.find(
      (x) => x.name === this.featureName
    );
    if (feature?.isActive) {
      this._vcf.createEmbeddedView(this._tpl);
    }
  }
}
