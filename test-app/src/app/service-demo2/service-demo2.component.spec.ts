import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemo2Component } from './service-demo2.component';

describe('ServiceDemo2Component', () => {
  let component: ServiceDemo2Component;
  let fixture: ComponentFixture<ServiceDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
