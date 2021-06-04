import { Component } from '@angular/core';
import { FeatureEnum } from './shared/enums/feature.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature: string = FeatureEnum.RECIPES;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
