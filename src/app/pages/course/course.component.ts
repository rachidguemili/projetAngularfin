import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/classes/course';
import { CourseService } from 'src/app/services/course/course.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/shared/classes/student';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'amm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  studentId: number;
  student: Student;
  coursesChoosen: Course[];
  course: Course;
  headers:['name','actions'];

  courses: MatTableDataSource<Course>;

  constructor(private courseService: CourseService,
    private activatedRouter: ActivatedRoute,
    private studentService: StudentService) { }



  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = new MatTableDataSource(data);
    });
      // test a changer this.studentId = 3
    // this.activatedRouter.paramMap.subscribe(param => {
    //   this.studentId = +param.get('id');

      this.studentId=3
      this.studentService.getStudentById(this.studentId).subscribe(data => {
        this.student = data;
        this.coursesChoosen = this.student.courses;

      // });

    });
  }


  add(option){

    this.coursesChoosen.push(option);

  }

  isChecked(event){
    this.isChecked = event.target.value;


  }
  compareFn(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else {

      return false;
    }

  }
}
