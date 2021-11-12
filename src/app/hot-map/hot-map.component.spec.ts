import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMapComponent } from './hot-map.component';

describe('HotMapComponent', () => {
  let component: HotMapComponent;
  let fixture: ComponentFixture<HotMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
