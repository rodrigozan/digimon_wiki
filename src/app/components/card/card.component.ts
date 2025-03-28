import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    RouterLink
  ]
})
export class CardComponent  implements OnInit {
  @Input() image!: string; 
  @Input() title!: string; 
  @Input() description!: string; 
  @Input() link!: string;
  @Input() buttonColor: string = 'primary'; 
  @Input() buttonFill: string = 'outline'; 
  @Input() buttonShape: string = 'round';
  @Input() buttonText: string = 'Ver Mais';

  constructor() { }

  ngOnInit() {}

}
