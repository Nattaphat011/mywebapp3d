import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Address2Component } from './address2.component';

describe('Address2Component', () => {
  let component: Address2Component;
  let fixture: ComponentFixture<Address2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Address2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Address2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
