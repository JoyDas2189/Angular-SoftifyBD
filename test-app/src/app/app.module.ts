import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HooksComponent } from './hooks/hooks.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateComponent } from './template/template.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomAttributeDirective } from './custom-attribute.directive';
import { CustomStructuralDirective } from './custom-structural.directive';
import { CustomAttributeRenderer2Directive } from './custom-attribute-renderer2.directive';
import { CustomAttributeHostlistenerDirective } from './custom-attribute-hostlistener.directive';
import { CustomAttributeHostbinderDirective } from './custom-attribute-hostbinder.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeManagementSystemReactiveFormComponent } from './employee-management-system-reactive-form/employee-management-system-reactive-form.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    FooterComponent,
    UserProfileComponent,
    ChildComponent,
    ParentComponent,
    HooksComponent,
    BindingComponent,
    DirectivesComponent,
    TemplateComponent,
    CustomDirectiveComponent,
    CustomAttributeDirective,
    CustomStructuralDirective,
    CustomAttributeRenderer2Directive,
    CustomAttributeHostlistenerDirective,
    CustomAttributeHostbinderDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    EmployeeManagementSystemReactiveFormComponent,
    HttpRequestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
