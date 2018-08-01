import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMapComponent } from './ad-map.component';

describe('AdMapComponent', () => {
  let component: AdMapComponent;
  let fixture: ComponentFixture<AdMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
