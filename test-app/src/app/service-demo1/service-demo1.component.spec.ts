import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemo1Component } from './service-demo1.component';

describe('ServiceDemo1Component', () => {
  let component: ServiceDemo1Component;
  let fixture: ComponentFixture<ServiceDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
