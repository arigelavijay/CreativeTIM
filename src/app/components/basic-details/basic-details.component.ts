import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { StateService } from '../../services/state.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  isCompleted: boolean = false;
  data: any = {};
  dataSubs: any;
  countryList: any;
  stateList: any;
  constructor(private countryService: CountryService, private stateService: StateService) {
    this.data = {
      email: '',
    };

    let countryData = this.countryService.GetCountryList();
    let stateData = this.stateService.GetStateList();

    this.dataSubs = Rx.Observable.zip(countryData, stateData)
      .subscribe(([_countryList, _stateList]) => {
        this.countryList = _countryList;
        this.stateList = _stateList;
      });
  }

  ngOnInit() {
  }

  onStep1Next(evt: any) {

  }

  onStep2Next(evt: any) {

  }

  onStep3Next(evt: any) {

  }

  onComplete(evt: any) {
    this.isCompleted = true;
  }

}
