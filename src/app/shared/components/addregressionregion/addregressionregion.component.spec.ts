import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregressionregionComponent } from './addregressionregion.component';

describe('AddregressionregionComponent', () => {
  let component: AddregressionregionComponent;
  let fixture: ComponentFixture<AddregressionregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregressionregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregressionregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
