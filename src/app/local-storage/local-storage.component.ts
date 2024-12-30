import { Component } from '@angular/core';

@Component({
  selector: 'local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css'],
})
export class localStorageComponent {
  key = 'Dummy_Data';
  dummydata = {
    data: {
      name: 'Mohit',
      rollNo: '123',
    },
  };

  result: any = undefined;

  saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.dummydata));
  }

  getData() {
    const res = localStorage.getItem(this.key);
    console.log('res--------', res);
    if (res) {
      this.result = JSON.parse(res);
    }
  }

  removeData(){
    localStorage.removeItem(this.key);
    this.result = null;
  }
}
