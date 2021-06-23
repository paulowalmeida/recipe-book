import { Component, OnInit } from '@angular/core';

import { FeatureEnum } from '../shared/enums/feature.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  features = FeatureEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
