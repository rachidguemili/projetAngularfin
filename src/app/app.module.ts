import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './pages/home/home.component';
import { RegistermeComponent } from './pages/registerme/registerme.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { TeacherlistComponent } from './pages/teacherlist/teacherlist/teacherlist.component';
import { ClasseComponent } from './pages/classe/classe/classe.component';
import { MeetComponent } from './pages/meet/meet/meet.component';
import { CheckpointComponent } from './pages/checkpoint/checkpoint/checkpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistermeComponent,
    HomeComponent,
    HomeComponent,
    LoginComponent,
    CourseComponent,
    AdminComponent,
    TeacherlistComponent,
    ClasseComponent,
    MeetComponent,
    CheckpointComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
