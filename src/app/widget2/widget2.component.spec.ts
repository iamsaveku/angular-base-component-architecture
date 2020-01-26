import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget2Component } from './widget2.component';

describe('Widget2Component', () => {
  let component: Widget2Component;
  let fixture: ComponentFixture<Widget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
