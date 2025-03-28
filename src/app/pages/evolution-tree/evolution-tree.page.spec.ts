import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvolutionTreePage } from './evolution-tree.page';

describe('EvolutionTreePage', () => {
  let component: EvolutionTreePage;
  let fixture: ComponentFixture<EvolutionTreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
