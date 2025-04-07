import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { logModel } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  getLogIn(logData:logModel){
    return this.http.post('http://projectapi.gerasim.in/api/IncidentTracking/login',logData);
  }
}
