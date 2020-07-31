import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSidebarComponent } from './gs-sidebar.component';

describe('GsSidebarComponent', () => {
  let component: GsSidebarComponent;
  let fixture: ComponentFixture<GsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
