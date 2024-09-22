import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtPoloComponent } from './tshirt-polo.component';

describe('TshirtPoloComponent', () => {
  let component: TshirtPoloComponent;
  let fixture: ComponentFixture<TshirtPoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TshirtPoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
