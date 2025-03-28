import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {
  private showSectionsSubject = new BehaviorSubject<boolean>(false);
  showSections$ = this.showSectionsSubject.asObservable();

  toggleSections(show: boolean) {
    this.showSectionsSubject.next(show);
  }
}