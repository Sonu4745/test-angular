import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
// import { UserShowDataComponent } from '../user-show-data/user-show-data.component';

@Component({
  selector: 'user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
  // standalone:true
})
export class UserComponent implements OnInit {
  @Output() dataToParent = new EventEmitter();

  // @Output() dataToParent1 = new EventEmitter();

  firstName: string = 'Rajat';
  lastName: string = '';
  inputAddress: string = '';
  inputZip: string = '';
  state: string = '';
  city: string = '0';
  isShow = false;
  key: string = 'User-Data';
  count: number = 1;
  user: any[] = [];
  getUserData: any[] = [];
  saveBtnOn = true;
  updateBtnOn = false;
  userIdGloblly: string = '';
  filterdCities: any[] = [];
  findCity: any = '';
  findCityName: any;
  saveAble = true;
  showModal = false;
  findResult:any= '';
  checkValue:any = '' ;

  // ngSwitch Case
  getResult() {
    // console.log('this.checkresult', this.checkValue);
  this.findResult = this.checkValue
  console.log(this.findResult)
  
  }

  states: any[] = [
    {
      stateName: 'Haryana',
      stateValue: 'HR',
      createdAt: '2024-10-29T18:09:37.234Z',
      id: '1',
    },
    {
      stateName: 'Himachal Pardesh',
      stateValue: 'HP',
      createdAt: '2024-11-04T06:41:04.450Z',
      id: '2',
    },
    {
      stateName: 'Uttar Pardesh',
      stateValue: 'UP',
      createdAt: '2024-11-04T11:04:17.787Z',
      id: '3',
    },
    {
      stateName: 'New Delhi',
      stateValue: 'DL',
      createdAt: '2024-11-04T12:08:05.755Z',
      id: '4',
    },
    {
      stateName: 'Andhar Pardesh',
      stateValue: 'AP',
      createdAt: '2024-11-04T12:15:31.623Z',
      id: '5',
    },
    {
      stateName: 'Rajasthan',
      stateValue: 'RJ',
      createdAt: '2024-11-05T04:43:39.231Z',
      id: '6',
    },
    {
      stateName: 'stateName 7',
      stateValue: 'stateValue 7',
      createdAt: 'createdAt 7',
      id: '7',
    },
    {
      stateName: 'stateName 8',
      stateValue: 'stateValue 8',
      createdAt: 'createdAt 8',
      id: '8',
    },
    {
      stateName: 'stateName 9',
      stateValue: 'stateValue 9',
      createdAt: 'createdAt 9',
      id: '9',
    },
    {
      stateName: 'stateName 10',
      stateValue: 'stateValue 10',
      createdAt: 'createdAt 10',
      id: '10',
    },
    {
      stateName: 'stateName 11',
      stateValue: 'stateValue 11',
      createdAt: 'createdAt 11',
      id: '11',
    },
    {
      stateName: 'stateName 12',
      stateValue: 'stateValue 12',
      createdAt: 'createdAt 12',
      id: '12',
    },
    {
      stateName: 'stateName 13',
      stateValue: 'stateValue 13',
      createdAt: 'createdAt 13',
      id: '13',
    },
    {
      stateName: 'stateName 14',
      stateValue: 'stateValue 14',
      createdAt: 'createdAt 14',
      id: '14',
    },
    {
      stateName: 'stateName 15',
      stateValue: 'stateValue 15',
      createdAt: 'createdAt 15',
      id: '15',
    },
    {
      stateName: 'stateName 16',
      stateValue: 'stateValue 16',
      createdAt: 'createdAt 16',
      id: '16',
    },
  ];

  cityArray: any[] = [
    {
      cityCreatedAt: 1730789371,
      cityName: 'Mujaffer Nagar',
      cityValue: 'MNG',
      stateId: '4',
      id: '8',
      createdAt: '2024-11-05T06:57:30.121Z',
      stateValueInCity: 'DL',
      zipCodeCity: '145997',
    },
    {
      cityCreatedAt: 1730792530,
      cityName: 'Sikar',
      cityValue: 'SKR',
      stateId: '6',
      id: '9',
      createdAt: '2024-11-05T07:51:09.469Z',
      stateValueInCity: 'RJ',
      zipCodeCity: '145878',
    },
    {
      cityCreatedAt: 1730799463,
      cityName: 'Noida',
      cityValue: 'NOD',
      stateId: '3',
      id: '10',
      createdAt: '2024-11-05T09:47:42.459Z',
      stateValueInCity: 'UP',
      zipCodeCity: '144654',
    },
    {
      cityCreatedAt: 1730886433,
      cityName: 'Pulwama',
      cityValue: 'PLW',
      stateId: '7',
      id: '16',
      createdAt: '2024-11-06T10:03:10.689Z',
      stateValueInCity: 'J&K',
      zipCodeCity: '451184',
    },
    {
      cityCreatedAt: 1731063847,
      cityName: 'jind',
      cityValue: 'dbfdsb',
      stateId: '2',
      id: '21',
      createdAt: '2024-11-08T12:30:40.622Z',
      stateValueInCity: 'HP',
      zipCodeCity: '247675',
    },
    {
      cityCreatedAt: 1731489063,
      cityName: 'Amritsar',
      cityValue: 'AMT',
      stateId: '9',
      id: '27',
      createdAt: '2024-11-14T06:27:23.993Z',
      stateValueInCity: 'PB',
      zipCodeCity: '124584',
    },
    {
      cityCreatedAt: 1731499578,
      cityName: 'Shimla',
      cityValue: 'SML',
      stateId: '2',
      id: '29',
      createdAt: '2024-11-13T12:35:24.560Z',
      stateValueInCity: 'HP',
      zipCodeCity: '145267',
    },
    {
      cityCreatedAt: 1731499698,
      cityName: 'Hisar',
      cityValue: 'Hsr',
      stateId: '1',
      id: '30',
      createdAt: '2024-11-13T12:38:24.427Z',
      stateValueInCity: 'HR',
      zipCodeCity: '125002',
    },
    {
      cityCreatedAt: 1731499651,
      cityName: 'Julana',
      cityValue: 'Jul',
      stateId: '1',
      id: '31',
      createdAt: '2024-11-13T12:38:38.180Z',
      stateValueInCity: 'HR',
      zipCodeCity: '541654',
    },
    {
      cityCreatedAt: 1731499576,
      cityName: 'Jaishelmair',
      cityValue: 'JSHL',
      stateId: '6',
      id: '34',
      createdAt: '2024-11-13T12:40:23.324Z',
      stateValueInCity: 'RJ',
      zipCodeCity: '434838',
    },
    {
      cityCreatedAt: 1731499568,
      cityName: 'Ludhiana',
      cityValue: 'LDH',
      stateId: '9',
      id: '35',
      createdAt: '2024-11-13T12:41:14.664Z',
      stateValueInCity: 'PB',
      zipCodeCity: '244083',
    },
    {
      cityCreatedAt: 1731499523,
      cityName: 'Patiala',
      cityValue: 'PTL',
      stateId: '9',
      id: '36',
      createdAt: '2024-11-13T12:41:29.792Z',
      stateValueInCity: 'PB',
      zipCodeCity: '435135',
    },
    {
      cityCreatedAt: 1731499490,
      cityName: 'Bathinda',
      cityValue: 'BDT',
      stateId: '9',
      id: '37',
      createdAt: '2024-11-14T06:25:50.495Z',
      stateValueInCity: 'PB',
      zipCodeCity: '044257',
    },
    {
      cityCreatedAt: 1732101070,
      cityName: 'cityName 38',
      cityValue: 'cityValue 38',
      stateId: 11,
      id: '38',
    },
    {
      cityCreatedAt: 1732101010,
      cityName: 'cityName 39',
      cityValue: 'cityValue 39',
      stateId: 56,
      id: '39',
    },
    {
      cityCreatedAt: 1732100950,
      cityName: 'cityName 40',
      cityValue: 'cityValue 40',
      stateId: 41,
      id: '40',
    },
    {
      cityCreatedAt: 1732100890,
      cityName: 'cityName 41',
      cityValue: 'cityValue 41',
      stateId: 30,
      id: '41',
    },
    {
      cityCreatedAt: 1732100830,
      cityName: 'cityName 42',
      cityValue: 'cityValue 42',
      stateId: 60,
      id: '42',
    },
    {
      cityCreatedAt: 1732100770,
      cityName: 'cityName 43',
      cityValue: 'cityValue 43',
      stateId: 71,
      id: '43',
    },
    {
      cityCreatedAt: 1732100710,
      cityName: 'cityName 44',
      cityValue: 'cityValue 44',
      stateId: 97,
      id: '44',
    },
  ];

  onChangeOfFirstName(event: any) {
    console.log('this.firstName', this.firstName);
    console.log('value..........', event);
    console.log('value..........', event.target.value);
  }

  // styles = {
  //   display:"block"
  // }
  ngOnInit() {
    // this.sweetAlert();
    this.openModal();
  }

  //bootstrap modal in use in angular
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  // sweet alert PopUp
  sweetAlert() {
    console.log('Inside Sweet Alert:');
    Swal.fire({
      title: 'Welcome This Website!',
      // text: 'Do you want to continue',
      icon: 'success',
      // confirmButtonText: 'Cool'
    });
  }

  onChangeState() {
    this.city = '0';

    this.filterdCities = this.cityArray.filter(
      (el) => el.stateId == this.state
    );
    // console.log(this.state);
    //  this.state = this.state
  }

  findStateName(stateID: any) {
    let stateName = this.states.find((el) => el.id == stateID);
    return stateName.stateName;
  }

  onChangeCity() {
    this.findCity = this.cityArray.find((el) => el.id == this.city);
    this.inputZip = this.findCity.zipCodeCity;
  }

  findCityNameById(cityId: any) {
    let citiesName = this.cityArray.find((el) => el.id == cityId);
    return citiesName.cityName;
  }

  //save user data in local storage
  saveData() {
    //call function get data in local storage
    this.getData();
    //genrate user id
    let getId = this.user[this.user.length - 1];
    if (getId) {
      this.count = getId.id;
      this.count++;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      inputAddress: this.inputAddress,
      inputZip: this.inputZip,
      state: this.state,
      city: this.city,
      id: this.count,
    };
    if (
      userData.firstName == '' ||
      userData.lastName == '' ||
      userData.state == '' ||
      userData.city == '0'
    ) {
      return;
    }
    // this.user.pop();
    this.user.push(userData);

    // if (this.firstName != '' || this.lastName != '') {

    this.isShow = true;
    this.firstName = '';
    this.lastName = '';
    this.inputAddress = '';
    this.inputZip = '';
    this.state = '';
    this.city = '';
    // }

    //localStorage set item in strigfy data
    localStorage.setItem(this.key, JSON.stringify(this.user));

    //sessionStorage set item in strigfy data
    // sessionStorage.setItem(this.key,JSON.stringify(this.user));
  }

  // get user data in local storage
  getData() {
    //localStorage get item in orignal type  data by JSON parse
    const getUser = localStorage.getItem(this.key);
    if (getUser) {
      this.user = JSON.parse(getUser);
      console.log('this.user', this.user);
      return this.dataToParent.emit(this.user);
    }

    //sessionStorage get item in orignal type  data by JSON parse
    // const getBySession = sessionStorage.getItem(this.key);
    // if (getBySession) {
    //  let getBySessionUser = JSON.parse(getBySession);
    //   console.log("this.user " , getBySessionUser)
    // }
  }

  @Input() userFindId = '';
  @Input() deleteData = '';

  // edit work to other child component to child component
  onChange() {
    this.saveBtnOn = false;
    this.updateBtnOn = true;
    // this.userIdGloblly = this.userFindId;
    const findUserById = this.user.find((el) => el.id == this.userFindId);
    console.log('findUserById', findUserById);
    this.firstName = findUserById.firstName;
    this.lastName = findUserById.lastName;
    this.inputAddress = findUserById.inputAddress;
    this.state = findUserById.state;
    this.onChangeState();
    this.city = findUserById.city;
    this.inputZip = findUserById.inputZip;
    this.getData();
  }

  // delet work get other component get id and work delete
  onClickDeletData() {
    //localStorage get item in orignal type  data by JSON parse

    const getUser = localStorage.getItem(this.key);

    if (getUser) {
      this.user = JSON.parse(getUser);
      this.user = this.user.filter((el) => el.id != this.deleteData);
      //localStorage set item in strigfy data
      localStorage.setItem(this.key, JSON.stringify(this.user));
      this.getData();
    }
  }

  //delet user data
  // deletData(getID: any) {
  //   //localStorage get item in orignal type  data by JSON parse
  //   const getUser = localStorage.getItem(this.key);

  //   if (getUser) {
  //     this.user = JSON.parse(getUser);
  //     this.user = this.user.filter((el) => el.id != getID);
  //     //localStorage set item in strigfy data
  //     localStorage.setItem(this.key, JSON.stringify(this.user));
  //   }
  // }

  //edit user data
  // editData(getEditId: any) {
  //   this.saveBtnOn = false;
  //   this.updateBtnOn = true;
  //   this.userIdGloblly = getEditId;
  //   const findUserById = this.user.find((el) => el.id == getEditId);
  //   console.log('findUserById', findUserById);
  //   this.firstName = findUserById.firstName;
  //   this.lastName = findUserById.lastName;
  //   this.inputAddress = findUserById.inputAddress;
  //   this.state = findUserById.state;
  //   this.onChangeState();
  //   this.city = findUserById.city;
  //   this.inputZip = findUserById.inputZip;
  // }

  // update user data
  updateUser() {
    this.userIdGloblly;
    console.log('monu', this.userIdGloblly);
    console.log('this.firstName', this.firstName, this.userIdGloblly);
    let findUserById = this.user.find((el) => el.id == this.userIdGloblly);
    console.log('findUserById', this.firstName, findUserById);

    findUserById.firstName = this.firstName;
    findUserById.lastName = this.lastName;
    findUserById.inputAddress = this.inputAddress;
    findUserById.city = this.city;
    findUserById.state = this.state;
    findUserById.inputZip = this.inputZip;

    localStorage.setItem(this.key, JSON.stringify(this.user));

    this.firstName = '';
    this.lastName = '';
    this.inputAddress = '';
    this.inputZip = '';
    this.state = '';
    this.city = '0';

    this.saveBtnOn = true;
    this.updateBtnOn = false;
  }

  //clear input work
  clearData() {
    this.firstName = '';
    this.lastName = '';
    this.inputAddress = '';
    this.inputZip = '';
    this.state = '';
    this.city = '0';
    this.saveBtnOn = true;
    this.updateBtnOn = false;
  }
}
