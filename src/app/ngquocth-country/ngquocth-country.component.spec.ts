import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgquocthCountryComponent } from './ngquocth-country.component';

describe('NgquocthCountryComponent', () => {
  let component: NgquocthCountryComponent;
  let fixture: ComponentFixture<NgquocthCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgquocthCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgquocthCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
