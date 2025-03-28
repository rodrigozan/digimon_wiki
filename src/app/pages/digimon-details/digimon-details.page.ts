import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-digimon-details',
  templateUrl: './digimon-details.page.html',
  styleUrls: ['./digimon-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DigimonDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
