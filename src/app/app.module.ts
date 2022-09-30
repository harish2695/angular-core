import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule } from "@angular/forms";
import { StudentComponent } from './student/student.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponentInteractionComponent } from './parent-component-interaction/parent-component-interaction.component';
import { SimpleComponent } from './hooks/simple.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import {HttpClientModule}  from "@angular/common/http";
import { StudentDetailComponent } from './student-detail/student-detail.component'

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentlistComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: '' , redirectTo:"/home" , pathMatch:"full"},
  {path: "**", component: NopagetodisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InterpolationsComponent,
    DataBindingComponent,
    StudentComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    ParentComponentInteractionComponent,
    SimpleComponent,
    StudentlistComponent,
    HomeComponent,
    NopagetodisplayComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
