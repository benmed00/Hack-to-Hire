import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAngularComponent } from './default-angular.component';

describe('DefaultAngularComponent', () => {
  let component: DefaultAngularComponent;
  let fixture: ComponentFixture<DefaultAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
