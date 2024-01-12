import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingWidgetComponent } from './binding-widget.component';

describe('BindingWidgetComponent', () => {
  let component: BindingWidgetComponent;
  let fixture: ComponentFixture<BindingWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingWidgetComponent]
    });
    fixture = TestBed.createComponent(BindingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
