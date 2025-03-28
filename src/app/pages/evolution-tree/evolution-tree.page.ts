import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-evolution-tree',
  templateUrl: './evolution-tree.page.html',
  styleUrls: ['./evolution-tree.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EvolutionTreePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
