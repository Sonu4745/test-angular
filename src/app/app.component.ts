import { Component, OnInit } from '@angular/core';
import { dummyData } from './dummy_data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'testapp';
  selectedData = dummyData;
  userData!: any;
  selectedUserId?: string;
  userIdFindData!: any;
  data: any;
  deleteUserId: any;

  ngOnInit(): void {
    console.log('inside ngonInit');
  }

  get onfindSelectedUser() {
    return this.selectedData.find((el) => el.id == this.selectedUserId)!;
  }

  onSelect(id: any) {
    this.selectedUserId = id;
  }

  handleData(data: any) {
    // console.log(data);
    this.userData = data;
  }

  getUserId(userId: any) {
    this.userIdFindData = userId;
    console.log('this.userIdFindData', this.userIdFindData);
  }

  getdeleteId(deleteId: any) {
    this.deleteUserId = deleteId;
    console.log("this.deleteUserId" , this.deleteUserId)
  }

  // count = 0;

  isValid = false;
  isValidation = false;

  increment() {
    this.isValid = true;
    this.isValidation = false;
  }

  descrement() {
    this.isValid = false;
    this.isValidation = true;
  }
}
