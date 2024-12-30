import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-show-data',
  //   standalone:true,
  templateUrl: './user-show-data.component.html',
  styleUrls: ['./user-show-data.component.css'],
})
export class UserShowDataComponent {
  findCity: any = '';
  findCityName: any;
  updateBtnOn = false;

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
  // onChangeState() {
  //   this.city = '0';

  //   this.filterdCities = this.cityArray.filter(
  //     (el) => el.stateId == this.state
  //   );
  //   // console.log(this.state);
  //   //  this.state = this.state
  // }

  findStateName(stateID: any) {
    let stateName = this.states.find((el) => el.id == stateID);
    return stateName.stateName;
  }

  // onChangeCity() {
  //   this.findCity = this.cityArray.find((el) => el.id == this.city);
  //   this.inputZip = this.findCity.zipCodeCity;
  // }

  findCityNameById(cityId: any) {
    let citiesName = this.cityArray.find((el) => el.id == cityId);
    return citiesName.cityName;
  }

  @Input() element!: 
    {
      firstName: string;
      lastName: string;
      inputAddress: string;
      inputZip: string;
      state: string;
      city: string;
      id: number;
    }
  ;

@Output() userId = new EventEmitter;
@Output() deleteUserId = new EventEmitter;

  deletData(getID: any) {
    this.deleteUserId.emit(getID)
  }

  //edit user data
  editData(getEditId: any) {
    this.updateBtnOn = true;
    this.userId.emit(getEditId)
  }
}
