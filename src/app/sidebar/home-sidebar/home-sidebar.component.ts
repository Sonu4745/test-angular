import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css'],
})
export class HomeSidebarComponent implements OnInit {
  studentName: any = '';
  studentEmail: any = '';
  studentAge: any = '';
  studentGrade: any = '';
  submitArray: any[] = [];
  student: any = 'Student_Records';
  isData = false;

ngOnInit(): void {
 
}


  submitForm() {
    let res = localStorage.getItem(this.student);
    if (res) {
      this.submitArray = JSON.parse(res);
    }

    let studentObj: any = {
      name: this.studentName,
      email: this.studentEmail,
      age: this.studentAge,
      grade: this.studentGrade,
    };

    this.submitArray.push(studentObj);
    // this.submitArray.pop();
    localStorage.setItem(this.student, JSON.stringify(this.submitArray));
  }

  showData() {

    let res = localStorage.getItem(this.student);
    if (res) {
      this.submitArray = JSON.parse(res);
    }
    this.isData = true;
   
  }
}
