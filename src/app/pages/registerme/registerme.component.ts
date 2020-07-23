import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/shared/classes/student';
 import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'amm-registerme',
  templateUrl: './registerme.component.html',
  styleUrls: ['./registerme.component.scss']
})
export class RegistermeComponent implements OnInit {

  form:FormGroup;
 student = new Student();
 isCreated: false;
 birthday: Date;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {


    if(!this.isCreated){
      this.form = new FormGroup({
        lastName: new FormControl(''),
        firstName: new FormControl(''),
        birthday: new FormControl(''),
        email: new FormControl(''),
        phoneNumber: new FormControl(''),
        password: new FormControl(''),
        streetNumber: new FormControl(''),
        streetName: new FormControl(''),
        cityCode: new FormControl(''),
        cityName: new FormControl(''),


      });
    } else
    {

      this.form = new FormGroup({
      lastName: new FormControl(this.student.lastName),
      firstName: new FormControl(this.student.firstName),
      email: new FormControl(this.student.email),
      phoneNumber: new FormControl(this.student.phoneNumber),
      password: new FormControl(this.student.password),
      streetNumber: new FormControl(this.student.streetName),
      streeName: new FormControl(this.student.streetNumber),
      cityCode: new FormControl(this.student.cityCode),
      cityName: new FormControl(this.student.cityName),

    });
  }
  }
    registerMe(){


      this.student.firstName= this.form.get('firstName').value;
      this.student.lastName= this.form.get('lastName').value;
      this.student.birthday= this.form.get('birthday').value;
      //   this.student.firstName= this.form.get('firstName').value;
    //   this.student.firstName= this.form.get('firstName').value;
    //   this.student.firstName= this.form.get('firstName').value;
    //   this.student.firstName= this.form.get('firstName').value;
    //   this.student.firstName= this.form.get('firstName').value;
    //   this.student.firstName= this.form.get('firstName').value;

     this.studentService.postStudent(this.student).subscribe(data=>{

        console.log("student = "+data);

     });
  }
    modifyUserDetails(){}
    onValidate(){}
}
