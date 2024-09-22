import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanscreenComponent } from './hanscreen.component';

describe('HanscreenComponent', () => {
  let component: HanscreenComponent;
  let fixture: ComponentFixture<HanscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HanscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
