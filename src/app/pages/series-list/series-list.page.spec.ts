import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesListPage } from './series-list.page';

describe('SeriesListPage', () => {
  let component: SeriesListPage;
  let fixture: ComponentFixture<SeriesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
