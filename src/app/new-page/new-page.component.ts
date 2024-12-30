import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
})
export class NewPageComponent {
  isTable = true;
  records: any = [
    {
      type: 'Student',
      name: 'Mohit',
      class: '10TH',
      phNumber: 874647694,
      subjects: [
        { name: 'Hindi', sno: 1, maxMarks: 100, practical: 0, theoryMarks: 57 },
        {
          name: 'English',
          sno: 2,
          maxMarks: 100,
          practical: 0,
          theoryMarks: 27,
        },
        {
          name: 'Science',
          sno: 3,
          maxMarks: 150,
          practical: 40,
          theoryMarks: 30,
        },
        { name: 'Math', sno: 4, maxMarks: 100, practical: 0, theoryMarks: 27 },
      ],
    },
    {
      type: 'Teacher',
      name: 'Monu',
      phNumber: 874647694,
      subjects: [
        { name: 'Hindi', pass: 60 },
        { name: 'English', pass: 50 },
        { name: 'Science', pass: 80 },
        { name: 'Math', pass: 30 },
      ],
    },
    {
      type: 'Student',
      name: 'Rajat',
      class: '10TH',
      phNumber: 874647694,
      subjects: [
        { name: 'Hindi', sno: 1, maxMarks: 100, practical: 0, theoryMarks: 85 },
        {
          name: 'English',
          sno: 2,
          maxMarks: 100,
          practical: 0,
          theoryMarks: 63,
        },
        {
          name: 'Science',
          sno: 3,
          maxMarks: 100,
          practical: 30,
          theoryMarks: 27,
        },
        { name: 'Math', sno: 4, maxMarks: 100, practical: 0, theoryMarks: 77 },
      ],
    },
    {
      type: 'Student',
      name: 'Rajnish',
      class: '10TH',
      phNumber: 874647694,
      subjects: [
        { name: 'Hindi', sno: 1, maxMarks: 100, practical: 0, theoryMarks: 27 },
        {
          name: 'English',
          sno: 2,
          maxMarks: 100,
          practical: 0,
          theoryMarks: 39,
        },
        {
          name: 'Science',
          sno: 3,
          maxMarks: 100,
          practical: 40,
          theoryMarks: 27,
        },
        { name: 'Math', sno: 4, maxMarks: 100, practical: 0, theoryMarks: 47 },
      ],
    },
    {
      type: 'Student',
      name: 'Sunny',
      class: '10TH',
      phNumber: 874647694,
      subjects: [
        { name: 'Hindi', sno: 1, maxMarks: 100, practical: 0, theoryMarks: 87 },
        {
          name: 'English',
          sno: 2,
          maxMarks: 100,
          practical: 0,
          theoryMarks: 77,
        },
        {
          name: 'Science',
          sno: 3,
          maxMarks: 200,
          practical: 40,
          theoryMarks: 27,
        },
        { name: 'Math', sno: 4, maxMarks: 100, practical: 0, theoryMarks: 27 },
      ],
    },
  ];

  changeTable() {
    this.isTable = !this.isTable;
  }
}
