import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNgquocthComponent } from './header-ngquocth.component';

describe('HeaderNgquocthComponent', () => {
  let component: HeaderNgquocthComponent;
  let fixture: ComponentFixture<HeaderNgquocthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderNgquocthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderNgquocthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
