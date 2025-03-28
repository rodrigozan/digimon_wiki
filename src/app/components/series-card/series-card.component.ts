import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonSeries } from 'src/app/models/series';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-series',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeriesComponent  implements OnInit {
  @Input() allSeries: DigimonSeries[] = []
  carouselConfig = {}
  
  constructor() { }

  ngOnInit() {}

}
