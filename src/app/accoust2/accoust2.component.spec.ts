import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accoust2Component } from './accoust2.component';

describe('Accoust2Component', () => {
  let component: Accoust2Component;
  let fixture: ComponentFixture<Accoust2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accoust2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accoust2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
