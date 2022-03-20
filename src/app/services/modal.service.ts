import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  displayScanner$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() { }
}
