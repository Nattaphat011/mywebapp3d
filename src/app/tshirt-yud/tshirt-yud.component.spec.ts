import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtYudComponent } from './tshirt-yud.component';

describe('TshirtYudComponent', () => {
  let component: TshirtYudComponent;
  let fixture: ComponentFixture<TshirtYudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TshirtYudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtYudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
