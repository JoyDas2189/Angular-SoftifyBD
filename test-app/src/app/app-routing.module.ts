import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TemplateComponent } from './template/template.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { EmployeeManagementSystemReactiveFormComponent } from './employee-management-system-reactive-form/employee-management-system-reactive-form.component';
import { ErrorComponent } from './error/error.component';
import { PipeComponent } from './pipes/pipe/pipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/Profile', pathMatch: 'full' },
  { path: 'Profile', component: UserProfileComponent },
  { path: 'Binding', component: BindingComponent },
  { path: 'Template', component: TemplateComponent },
  { path: 'Directive', component: DirectivesComponent },
  { path: 'CustomDirective', component: CustomDirectiveComponent },
  { path: 'TemplateForm', component: TemplateDrivenFormComponent },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  {
    path: 'EmployeeManagementSystem',
    component: EmployeeManagementSystemReactiveFormComponent,
  },
  { path: 'Pipe', component: PipeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
