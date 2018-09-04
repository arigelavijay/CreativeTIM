import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import * as Rx from 'rxjs';

@Injectable()
export class CountryService {
    GetCountryList() {
        return new Rx.Observable(observer => {
            let countrList = [
                {
                    id: 1001,
                    name: 'India'
                },
                {
                    id: 1002,
                    name: 'China'
                },
                {
                    id: 1003,
                    name: 'Australia'
                },
                {
                    id: 1004,
                    name: 'Malaysia'
                },
                {
                    id: 1005,
                    name: 'Singapore'
                }
            ]
            
            setTimeout(() => {
                observer.next(countrList);
            }, 500)
        });
    }
}