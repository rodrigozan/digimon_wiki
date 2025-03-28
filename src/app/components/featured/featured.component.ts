import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Digimon } from 'src/app/models/digimon';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class FeaturedComponent  implements OnInit {
  @Input() featuredDigimons: Digimon[] = []

  constructor() { }

  ngOnInit() {}

}
