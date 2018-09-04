import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { StateService } from '../../services/state.service';
import * as Rx from 'rxjs';
import { Country } from '../../models/country.model';
import { State } from '../../models/state.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    dataSubs: any;
    countryList: any;
    stateList: any;
    constructor(private countryService: CountryService, private stateService: StateService) {
        let countryData = this.countryService.GetCountryList();
        let stateData = this.stateService.GetStateList();

        this.dataSubs = Rx.Observable.zip(countryData, stateData)
            .subscribe(([_countryList, _stateList]) => {
                this.countryList = _countryList;
                this.stateList = _stateList;
            });
    }
}