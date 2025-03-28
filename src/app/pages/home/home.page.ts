import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonContent } from "@ionic/angular/standalone";

import { Digimon } from 'src/app/models/digimon';
import { DigimonSeries } from 'src/app/models/series';

import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { UiStateService } from 'src/app/services/ui-state/ui-state.service';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { SeriesComponent } from 'src/app/components/series-card/series-card.component';
import { FeaturedComponent } from 'src/app/components/featured/featured.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonContent,
    CommonModule,
    HeaderComponent, FooterComponent, HeroComponent, SeriesComponent, FeaturedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  title = "Digimon Wiki"
  selectedSegment = 'featured';
  featuredDigimons: Digimon[] = [];
  allSeries: DigimonSeries[] = [];
  digimonTypes: any[] = [];
  showSections$ = this.uiState.showSections$;

  isLoading = false;
  error: string | null = null;

  constructor(
    private firebaseService: FirebaseService,
    private uiState: UiStateService
  ) { }

  async ngOnInit() {
    await this.loadData()
  }

  private async loadData() {
    this.isLoading = true;
    this.error = null;

    try {
      // Carregar Digimon em destaque
      const digimonData = await this.firebaseService.getAllDigimon();
      this.featuredDigimons = digimonData.map(d => ({
        id: d.id || '',
        name: d.name || '',
        level: d.level || '',
        type: d.type || '',
        attribute: d.attribute || '',
        powers: d.powers || [],
        partners: d.partners || [],
        firstAppearance: d.firstAppearance || { series: '', episode: 0 },
        evolutions: d.evolutions || [],
        description: d.description || '',
        imageUrl: d.imageUrl || ''
      }));

      // Carregar Séries
      this.allSeries = await this.firebaseService.getAllSeries();

      // Carregar Tipos
      this.digimonTypes = await this.firebaseService.getAllTypes();

      console.log("Featured Digimons", this.featuredDigimons)

    } catch (error: any) {
      console.error('Erro ao carregar os dados:', error);
      this.error = 'Erro ao carregar os dados. Tente novamente mais tarde.';
    } finally {
      this.isLoading = false;
    }
  }
}
