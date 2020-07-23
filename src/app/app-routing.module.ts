import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistermeComponent } from './pages/registerme/registerme.component';
import { CourseComponent } from './pages/course/course.component';


const routes: Routes = [
  {path : 'register', component : RegistermeComponent},
  {path : 'scores/:id', component : CourseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
