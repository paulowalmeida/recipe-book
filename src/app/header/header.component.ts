import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FeatureEnum } from '../shared/enuns/feature.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  featureSelected = new EventEmitter<string>();

  features = FeatureEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
