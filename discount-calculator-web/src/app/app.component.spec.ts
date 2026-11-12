import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let analytics: { logEvent: jasmine.Spy };

  beforeEach(async () => {
    analytics = {
      logEvent: jasmine.createSpy('logEvent').and.returnValue(Promise.resolve())
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AngularFireAnalytics, useValue: analytics }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'discount-calculator-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('discount-calculator-web');
  });

  it('should record an app access event when the app starts', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(analytics.logEvent).toHaveBeenCalledWith('app_access', {
      page_path: window.location.pathname
    });
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-sheet')).toBeTruthy();
  });
});
