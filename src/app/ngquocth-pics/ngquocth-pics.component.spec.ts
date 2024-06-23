import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgquocthPicsComponent } from './ngquocth-pics.component';

describe('NgquocthPicsComponent', () => {
  let component: NgquocthPicsComponent;
  let fixture: ComponentFixture<NgquocthPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgquocthPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgquocthPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
