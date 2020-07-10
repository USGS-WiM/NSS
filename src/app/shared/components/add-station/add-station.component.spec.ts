import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStationComponent } from './add-station.component';

describe('AddStationComponent', () => {
  let component: AddStationComponent;
  let fixture: ComponentFixture<AddStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
