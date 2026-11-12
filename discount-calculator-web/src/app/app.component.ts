import { Component, Injector, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'discount-calculator-web';

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    if (!environment.analyticsEnabled) {
      return;
    }

    this.injector.get(AngularFireAnalytics).logEvent('app_access', {
      page_path: window.location.pathname
    }).catch(error => console.error('Unable to record the app access event.', error));
  }
}
