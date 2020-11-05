import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { RequestResponse } from 'src/app/shared/types';
import { OurTeamBlock } from 'src/app/main/main.model';

@Injectable()
export class MainResolver implements Resolve<Observable<RequestResponse<OurTeamBlock>>> {
    constructor(private apiService: ApiService) {
    }

    resolve() {
        return this.apiService.getOurTeamData();
    }
}
