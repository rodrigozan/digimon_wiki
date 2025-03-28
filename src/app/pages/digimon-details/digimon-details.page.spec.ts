import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonDetailsPage } from './digimon-details.page';

describe('DigimonDetailsPage', () => {
  let component: DigimonDetailsPage;
  let fixture: ComponentFixture<DigimonDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
