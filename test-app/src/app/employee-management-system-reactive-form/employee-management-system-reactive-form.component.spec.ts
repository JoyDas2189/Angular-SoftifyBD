import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementSystemReactiveFormComponent } from './employee-management-system-reactive-form.component';

describe('EmployeeManagementSystemReactiveFormComponent', () => {
  let component: EmployeeManagementSystemReactiveFormComponent;
  let fixture: ComponentFixture<EmployeeManagementSystemReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeManagementSystemReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementSystemReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
