import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInputTextComponent } from './display-input-text.component';

describe('DisplayInputTextComponent', () => {
  let component: DisplayInputTextComponent;
  let fixture: ComponentFixture<DisplayInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
