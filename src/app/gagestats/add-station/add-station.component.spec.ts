import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStationModal } from './add-station.component';

describe('AddStatioAddStationModalnComponent', () => {
  let component: AddStationModal;
  let fixture: ComponentFixture<AddStationModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStationModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
