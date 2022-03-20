import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScannerService } from 'src/app/services/scanner.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputCode: string;

  constructor(
    private modalService: ModalService, 
    private scannerServive: ScannerService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }


  onScannerClicked(): void {
    this.modalService.displayScanner$.next(true)
  }

  onSearchClicked(){
    if(this.inputCode){
      this.router.navigateByUrl(`/result/${this.inputCode}`);
    }
  }

  scannerListener(): void {
    this.scannerServive.barcode$.subscribe(code => {
      this.inputCode = code;
      this.onSearchClicked()
    })
  }
}
