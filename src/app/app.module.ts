import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatCardModule } from '@angular/material/card';  
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SelfItemsComponent } from './self-items/self-items.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';  
import { MatDialogModule } from '@angular/material/dialog';  
import { MatGridListModule } from '@angular/material/grid-list';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    TransactionComponent,
    SelfItemsComponent,
    ConfirmPurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    Ng2SearchPipeModule,
  FormsModule,
  HttpClientModule,
  MatDialogModule,
  MatGridListModule,
  //Material ANgular compnents
  MatToolbarModule,  
  MatCardModule,  
  MatButtonModule  ,
  MatInputModule,
  MatToolbarModule,
  FormsModule,
  MatFormFieldModule,
  //
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
