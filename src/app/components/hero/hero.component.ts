import { Component, OnInit, Input } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class HeroComponent  implements OnInit {
  @Input() title = ''

  constructor() { }

  ngOnInit() {}

}
