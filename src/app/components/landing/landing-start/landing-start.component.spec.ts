import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStartComponent } from './landing-start.component';

describe('LandingStartComponent', () => {
  let component: LandingStartComponent;
  let fixture: ComponentFixture<LandingStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
