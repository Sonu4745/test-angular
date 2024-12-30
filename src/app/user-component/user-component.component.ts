import { Component, computed, EventEmitter, Input, Output  } from '@angular/core';
import { dummyData } from '../dummy_data';

// const randomUserIndex = Math.floor(Math.random() * dummyData.length);

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
})

export class UserComponentComponent {

  // selectedUser = dummyData;

  /////input decorator work is sending data parent to child 
@Input({required:true}) user!:{
  name:string;
  img:string;
  id:string;
}

//  @Input({required:true}) name:string = '';
//  @Input() img:string = '';
//  @Input() idUser:string = '' ;


 ////output decorator work is sending data child to parent !
 @Output() clickEvent = new EventEmitter;

 get imagePath(){
  return "./assets/image/" + this.user.img;
 }
 
 onSelect(){
 this.clickEvent.emit(this.user.id);
 console.log("userComponent work")
 }


 ////////same as Input decorater same work send data parent to child it is special function 
// name = input.required<string>();
// img = input.required<string>();

//same work as get function not availavle angular 16  
// imagePath = computed(()=>{
// return "./assets/image/" + this.img()
// })

///same as Output decorator same work send data child to parent it is special function
// clickEvent = output<string>();































//constructor
  // constructor() {
  //   console.log('this.selectedUser', this.selectedUser);
  // }



}
