import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirHockeyComponent } from './air-hockey.component';

describe('AirHockeyComponent', () => {
  let component: AirHockeyComponent;
  let fixture: ComponentFixture<AirHockeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirHockeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirHockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
