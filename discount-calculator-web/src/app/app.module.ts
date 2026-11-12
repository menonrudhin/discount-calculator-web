import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ...(environment.analyticsEnabled
      ? [
          AngularFireModule.initializeApp(environment.firebase),
          AngularFireAnalyticsModule
        ]
      : [])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
