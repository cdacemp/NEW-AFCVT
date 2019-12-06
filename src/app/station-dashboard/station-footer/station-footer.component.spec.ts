import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationFooterComponent } from './station-footer.component';

describe('StationFooterComponent', () => {
  let component: StationFooterComponent;
  let fixture: ComponentFixture<StationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
