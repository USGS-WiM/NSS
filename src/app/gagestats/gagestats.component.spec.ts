import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GagestatsComponent } from './gagestats.component';

describe('GagestatsComponent', () => {
  let component: GagestatsComponent;
  let fixture: ComponentFixture<GagestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GagestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GagestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
