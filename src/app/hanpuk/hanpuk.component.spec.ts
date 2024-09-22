import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanpukComponent } from './hanpuk.component';

describe('HanpukComponent', () => {
  let component: HanpukComponent;
  let fixture: ComponentFixture<HanpukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HanpukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanpukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
