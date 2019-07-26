import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutMeComponent } from './landing-about-me.component';

describe('LandingAboutMeComponent', () => {
  let component: LandingAboutMeComponent;
  let fixture: ComponentFixture<LandingAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
