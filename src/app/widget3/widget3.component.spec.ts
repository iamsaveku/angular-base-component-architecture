import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget3Component } from './widget3.component';

describe('Widget3Component', () => {
  let component: Widget3Component;
  let fixture: ComponentFixture<Widget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
