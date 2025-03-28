import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonTitle, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonTitle, IonIcon]
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = ''

  constructor() { }

  ngOnInit() {}

}
