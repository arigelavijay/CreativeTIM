import { Component, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { InstituteTypeService } from '../../services/institute.service';
import * as Rx from 'rxjs';
import { Country } from '../../models/country.model';
import { State } from '../../models/state.model';
import { Register } from '../../models/register.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
    dataSubs: any;
    countryList: any;
    instituteTypeList: any;
    @ViewChild('registerForm')
    registerForm: NgForm;

    submitted: boolean = false;
    constructor(private countryService: CountryService, private instituteTypeService: InstituteTypeService) {
        let countryData = this.countryService.GetCountryList();
        let instituteTypeData = this.instituteTypeService.GetInstituteTypeList();

        this.dataSubs = Rx.Observable.zip(countryData, instituteTypeData)
            .subscribe(([_countryList, _instituteTypeList]) => {
                this.countryList = _countryList;
                this.instituteTypeList = _instituteTypeList;
            });
    }

    ngOnDestroy() {
        if(this.dataSubs)
            this.dataSubs.unsubscribe();
    }

    register(registerForm: NgForm) {
        if(registerForm.form.valid) {
            alert('valid');
        }
    }

    
}