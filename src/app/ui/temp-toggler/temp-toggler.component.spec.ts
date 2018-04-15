import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTogglerComponent } from './temp-toggler.component';

describe('TempTogglerComponent', () => {
  let component: TempTogglerComponent;
  let fixture: ComponentFixture<TempTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
