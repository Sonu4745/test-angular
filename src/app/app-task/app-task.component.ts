import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-task',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.css']
})
export class AppTaskComponent {

  // user1:string = "Monu1212121212"
 
  @Input() userName?:string;
  @Input() userId?:string;

//   @Output()user = new EventEmitter ;

// onClickDown(){
// // this.user.emit(this.user1);
// console.log("work DOne")
// }

}
