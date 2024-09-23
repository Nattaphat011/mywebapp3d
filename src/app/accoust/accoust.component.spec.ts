import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoustComponent } from './accoust.component';

describe('AccoustComponent', () => {
  let component: AccoustComponent;
  let fixture: ComponentFixture<AccoustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccoustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
