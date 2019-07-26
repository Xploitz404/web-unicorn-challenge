import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProjectsComponent } from './landing-projects.component';

describe('LandingProjectsComponent', () => {
  let component: LandingProjectsComponent;
  let fixture: ComponentFixture<LandingProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
