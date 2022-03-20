import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  barcode$: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() { }
  
}
