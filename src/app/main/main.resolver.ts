import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { RequestResponse } from '../shared/types';
import { OurTeamBlock } from './main.model';

@Injectable()
export class MainResolver implements Resolve<Observable<RequestResponse<OurTeamBlock>>> {
    constructor(private apiService: ApiService) {
    }

    resolve() {
        return this.apiService.getOurTeamData();
    }
}
