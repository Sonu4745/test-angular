import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  topic: any = ['HTML', 'CSS', 'Java Script', 'Jquery', 'Angular'];
  constructor(private router: Router) {}

  submittedToHome() {
    // setTimeout(() => {
      this.router.navigate(['home'])
    // }, 5000);
  }
}
