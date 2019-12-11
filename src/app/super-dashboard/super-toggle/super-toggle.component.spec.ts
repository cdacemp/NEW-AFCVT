import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperToggleComponent } from './super-toggle.component';

describe('SuperToggleComponent', () => {
  let component: SuperToggleComponent;
  let fixture: ComponentFixture<SuperToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
