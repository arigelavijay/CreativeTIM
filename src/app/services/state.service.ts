import { Injectable } from '@angular/core';
import { State } from '../models/state.model';
import * as Rx from 'rxjs';

@Injectable()
export class StateService {
    GetStateList() {
        return new Rx.Observable(observer => {
            let stateList = [
                {
                    id: 1001,
                    name: 'Andhra Pradesh'
                },
                {
                    id: 1002,
                    name: 'Telangana'
                },
                {
                    id: 1003,
                    name: 'Tamil Nadu'
                },
                {
                    id: 1004,
                    name: 'Kerala'
                },
                {
                    id: 1005,
                    name: 'Delhi'
                }
            ]
            
            setTimeout(() => {
                observer.next(stateList);
            }, 500)
        });
    }
}