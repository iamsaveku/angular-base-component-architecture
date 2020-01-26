import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget1Component } from './widget1.component';

describe('Widget1Component', () => {
  let component: Widget1Component;
  let fixture: ComponentFixture<Widget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
