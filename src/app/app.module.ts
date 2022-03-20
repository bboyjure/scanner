import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScannerComponent } from './components/scanner/scanner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';
import { MenuItem, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { ZXingScannerModule } from 'angular-weblineindia-qrcode-scanner';
import { ResultComponent } from './components/result/result.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScannerComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputMaskModule,
    ToastModule,
    TabViewModule,
    NgxJsonViewerModule,
    DialogModule,
    ButtonModule,
    ZXingScannerModule,
    MessagesModule,
    MessageModule,
    InputTextModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
