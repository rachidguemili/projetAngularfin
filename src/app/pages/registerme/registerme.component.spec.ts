import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermeComponent } from './registerme.component';

describe('RegistermeComponent', () => {
  let component: RegistermeComponent;
  let fixture: ComponentFixture<RegistermeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
