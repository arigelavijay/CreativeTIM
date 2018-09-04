import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InstituteTypeService {
    GetInstituteTypeList() {
        return new Observable(observer => {
            let instituteTypeList = [
                {
                    id: 3001,
                    name: 'School'
                },
                {
                    id: 3002,
                    name: 'Play School'
                },
                {
                    id: 3003,
                    name: 'College'
                }
            ];

            setTimeout(() => {
                observer.next(instituteTypeList);
            }, 500);
        });
    }
}