import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './MyComponents/directives/directives.component';
import { TemplateFormComponent } from './MyComponents/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './MyComponents/services/services.component';
import { ReactiveFormComponent } from './MyComponents/reactive-form/reactive-form.component';
import { PostApiComponent } from './MyComponents/post-api/post-api.component';
import { PostServicesService } from './MyServices/post-services.service';
import { CRUDComponent } from './MyComponents/crud/crud.component';
import { ObservablesComponent } from './MyComponents/observables/observables.component';
import { CrudNewComponent } from './MyComponents/crud-new/crud-new.component';
import { MyComponent } from './my/my.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    TemplateFormComponent,
    ServicesComponent,
    ReactiveFormComponent,
    PostApiComponent,
    CRUDComponent,
    ObservablesComponent,
    CrudNewComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
