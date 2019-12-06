import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationNavbarComponent } from './station-navbar.component';

describe('StationNavbarComponent', () => {
  let component: StationNavbarComponent;
  let fixture: ComponentFixture<StationNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
