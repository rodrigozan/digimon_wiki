import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesDetailsPage } from './series-details.page';

describe('SeriesDetailsPage', () => {
  let component: SeriesDetailsPage;
  let fixture: ComponentFixture<SeriesDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
