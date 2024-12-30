import { Component } from '@angular/core';

interface State {
  stateName: string;
  stateValue: string;
  createdAt: string;
  id: string;
}
interface City {
  cityCreatedAt: number;
  cityName: string;
  cityValue: string;
  stateId: string;
  id: string;
  createdAt: string;
  stateValueInCity: string;
  zipCodeCity: string;
}

@Component({
  selector: 'search-bar-component',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  // searchText2: string = '';
  isShow: boolean = false;

  states: State[] = [
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
  ];

  cities: City[] = [
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
  ];

  filteredState: any = this.states;
  filteredcity: City[] = this.cities;

  searchData() {
    this.filteredState = this.states.find((el) => el.id == this.searchText);

    this.filteredcity = this.cities.filter((el) =>
      el.stateId.includes(this.filteredState.id)
    );

    if (this.filteredcity) {
      this.isShow = true;
    }

  }
  
}
