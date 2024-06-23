import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgquocthAboutComponent } from './ngquocth-about.component';

describe('NgquocthAboutComponent', () => {
  let component: NgquocthAboutComponent;
  let fixture: ComponentFixture<NgquocthAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgquocthAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgquocthAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
