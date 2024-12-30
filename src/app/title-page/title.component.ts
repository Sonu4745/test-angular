import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() name:string = '';

  isShow = false;

  toggleButton() {
    this.isShow = !this.isShow;
    this.isShow;
  }
}
