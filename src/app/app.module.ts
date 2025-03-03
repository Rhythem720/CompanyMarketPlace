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
import { ItemCardComponent } from './item-card/item-card.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SelfItemsComponent } from './self-items/self-items.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';  
import { MatDialogModule } from '@angular/material/dialog';  
import { MatGridListModule } from '@angular/material/grid-list';  

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    ItemCardComponent,
    HomeComponent,
    TransactionComponent,
    SelfItemsComponent,
    ConfirmPurchaseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
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
