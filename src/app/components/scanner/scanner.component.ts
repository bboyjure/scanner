import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from 'angular-weblineindia-qrcode-scanner';
import { ModalService } from 'src/app/services/modal.service';
import { ScannerService } from 'src/app/services/scanner.service';
import { BarcodeFormat } from 'angular-weblineindia-qrcode-scanner/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  allowedFormats = [
      BarcodeFormat.AZTEC,
      BarcodeFormat.CODABAR,
      BarcodeFormat.CODE_39,
      BarcodeFormat.CODE_93,
      BarcodeFormat.CODE_128,
      BarcodeFormat.DATA_MATRIX,
      BarcodeFormat.EAN_8,
      BarcodeFormat.EAN_13,
      BarcodeFormat.ITF,
      BarcodeFormat.MAXICODE,
      BarcodeFormat.PDF_417,
      BarcodeFormat.QR_CODE,
      BarcodeFormat.RSS_14,
      BarcodeFormat.RSS_EXPANDED,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.UPC_EAN_EXTENSION
  ];
  scannerEnabled = true;
  isDetected = false;
  cameraEnabled = false;

  constructor(
      private scannerService: ScannerService,
      private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }


  camerasNotFoundHandler(event) {
      alert("camerasNotFoundHandler" + event);
  }
  scanSuccessHandler(code) {
      // alert("scanSuccessHandler: " + code);
      if (code.length >= 10 && code.length <= 15 && !this.isDetected) {
          this.isDetected = true;
          const timeout = setTimeout(() => {
              // window.alert(`code: ${code}`);
              this.scannerService.barcode$.next(code);
              this.modalService.displayScanner$.next(false);
              this.isDetected = false;
              clearTimeout(timeout);
          }, 1500);
      }
  }

  // onTorchCompatible(event) {
  //     alert("onTorchCompatible" + event);
  // }
  camerasFoundHandler(event) {
      // alert("camerasFoundHandler" + event);
      this.cameraEnabled = true;
  }
}
