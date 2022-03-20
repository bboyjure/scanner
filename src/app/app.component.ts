import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sscc-client';
  displayModal = false;
  displayScanner = false;

  constructor(
    private modalService: ModalService,
  ) {

  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.modalService.displayScanner$.subscribe(isOpen => {
      // console.warn("IS OPEN", isOpen)
      this.displayModal = isOpen;
      this.displayScanner = isOpen;
    })
  }

  closeModal(): void {
    this.displayModal = false;
    this.displayScanner = false;
  }
}
